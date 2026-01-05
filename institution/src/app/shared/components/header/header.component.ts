import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isSticky = false;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Close mobile menu on route change
    if (this.isBrowser) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.isMenuOpen = false;
        this.closeAllDropdowns();
      });

      // Check initial scroll position
      this.checkScrollPosition();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkScrollPosition();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isBrowser) {
      const target = event.target as HTMLElement;
      const clickedInside = target.closest('.navbar');

      if (!clickedInside && this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.isBrowser && window.innerWidth >= 1200) {
      this.isMenuOpen = false;
    }
  }

  private checkScrollPosition() {
    this.isSticky = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isBrowser) {
      // Prevent body scroll when mobile menu is open
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  private closeAllDropdowns() {
    if (this.isBrowser) {
      const dropdowns = document.querySelectorAll('.dropdown-menu.show');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  }

  // Method to handle dropdown toggle on mobile
  toggleDropdown(event: Event) {
    if (this.isBrowser && window.innerWidth < 1200) {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const dropdownMenu = target.nextElementSibling as HTMLElement;

      if (dropdownMenu) {
        const isOpen = dropdownMenu.classList.contains('show');

        // Close all other dropdowns
        this.closeAllDropdowns();

        // Toggle current dropdown
        if (!isOpen) {
          dropdownMenu.classList.add('show');
          target.setAttribute('aria-expanded', 'true');
        } else {
          dropdownMenu.classList.remove('show');
          target.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }
}