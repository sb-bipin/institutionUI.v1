import { Component, HostListener } from '@angular/core';
import { TopBarComponent } from "../shared/components/top-bar/top-bar.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { News } from '../core/models/news.model';
import { Program } from '../core/models/program.model';
import { Event } from '../core/models/event.model';
import { EventService } from '../core/services/event.service';
import { NewsService } from '../core/services/news.service';
import { ProgramService } from '../core/services/program.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RouterModule, CommonModule, TopBarComponent, HeaderComponent, FooterComponent],
  providers: [ProgramService, NewsService, EventService],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {


  isMenuOpen = false;
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 100;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
