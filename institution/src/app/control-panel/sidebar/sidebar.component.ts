import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  route: string;
  iconId: string;
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
    { label: 'Users', route: '/control-panel/dashboard/users', iconId: 'users' },
    { label: 'Analytics', route: '/control-panel/analytics', iconId: 'analytics' },
    { label: 'Dashboard', route: '/control-panel/dashboard', iconId: 'dashboard', divider: true },
    { label: 'Settings', route: '/control-panel/setting', iconId: 'settings' },
    { label: 'Notifications', route: '/control-panel/notifications', iconId: 'bell' },
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