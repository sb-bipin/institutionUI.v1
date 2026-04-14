import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { TopBarComponent } from "../shared/components/top-bar/top-bar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-control-panel',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

}
