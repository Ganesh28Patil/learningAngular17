import { CrewDesginationsComponent } from './../crew-desginations/crew-desginations.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesginationsComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
 message = 'message transfering from component'
}
 