import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-crew-desginations',
  templateUrl: './crew-desginations.component.html',
  styleUrl: './crew-desginations.component.scss'
})
export class CrewDesginationsComponent {
  @Input()  messageReceiverFromChild:string = '';
  @Input() token:number = 10;
}
