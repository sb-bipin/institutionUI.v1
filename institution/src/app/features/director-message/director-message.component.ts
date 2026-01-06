import { Component } from '@angular/core';

@Component({
  selector: 'app-director-message',
  imports: [],
  templateUrl: './director-message.component.html',
  styleUrl: './director-message.component.scss'
})
export class DirectorMessageComponent {
  director = {
    name: 'Mr. Shailesh Kumar Singh',
    position: 'Director',
    initials: 'SS',
    quote: 'Shaping minds, building futures'

  };
}
