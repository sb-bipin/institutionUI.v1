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
    if (!this.isBrowser) return;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        this.closeAllDropdowns();
      });

    this.checkScrollPosition();
  }


  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkScrollPosition();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.isBrowser && window.innerWidth >= 992) {
      this.closeMenu();
    }
  }

  private checkScrollPosition() {
    this.isSticky = window.scrollY > 50;
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll(this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(lock: boolean) {
    if (!this.isBrowser) return;
    document.body.style.overflow = lock ? 'hidden' : '';
  }


  toggleDropdown(event: Event) {
    if (!this.isBrowser || window.innerWidth >= 992) return;

    event.preventDefault();

    const trigger = event.currentTarget as HTMLElement;
    const menu = trigger.nextElementSibling as HTMLElement;

    if (!menu) return;

    const isOpen = menu.classList.contains('show');
    this.closeAllDropdowns();

    if (!isOpen) {
      menu.classList.add('show');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }

  private closeAllDropdowns() {
    if (!this.isBrowser) return;

    document
      .querySelectorAll('.dropdown-menu.show')
      .forEach(el => el.classList.remove('show'));
  }
}
