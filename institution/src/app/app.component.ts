import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterModule],
})
export class AppComponent {
  title = 'nwa-college';
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}