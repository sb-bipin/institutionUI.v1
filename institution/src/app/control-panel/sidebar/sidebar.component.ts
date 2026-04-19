import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  route: string;
  faIcon: string;
  divider?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false;
  isMobileOpen = false;

  navItems: NavItem[] = [
    { label: 'Dashboard', route: '/control-panel/dashboard', faIcon: 'fa-solid fa-gauge' },
    { label: 'Users', route: '/control-panel/dashboard/users', faIcon: 'fa-solid fa-users' },
    { label: 'Images', route: '/control-panel/dashboard/gallery', faIcon: 'fa-solid fa-image' },
    { label: 'Event', route: '/control-panel/dashboard/event', faIcon: 'fa-solid fa-calendar' },
    { label: 'News', route: '/control-panel/dashboard/news', faIcon: 'fa-solid fa-newspaper' },
    { label: 'Notices', route: '/control-panel/dashboard/notices', faIcon: 'fa-solid fa-bell' },
    { label: 'Instant Popups', route: '/control-panel/popups', faIcon: 'fa-solid fa-gear', divider: true },
  ];

  toggleSidebar(): void {
    if (window.innerWidth <= 768) {
      this.isMobileOpen = !this.isMobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768) {
      this.isMobileOpen = false;
    }
  }
}