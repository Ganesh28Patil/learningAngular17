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
  messageSenderFromParent:string = 'data transfered from parent component';          
  parentSharingToken:number = 13323223;
}
 