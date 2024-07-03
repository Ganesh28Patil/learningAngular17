import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() childReceivingDataFromParent:string = '';

  @Output() childSendingDataToParent = new EventEmitter<string>();

  SendData(){
    this.childSendingDataToParent.emit('Send Data from Child to Parent');
  }
  
}
