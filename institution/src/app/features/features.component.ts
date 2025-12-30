import { Component } from '@angular/core';
import { TopBarComponent } from "../shared/components/top-bar/top-bar.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-features',
  imports: [RouterModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

}
