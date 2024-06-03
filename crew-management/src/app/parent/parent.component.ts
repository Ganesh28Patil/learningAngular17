import { ChildComponent } from './../child/child.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentSendingDataToChild:string = 'Data sent from PARENT  to CHILD ';

  parentReceivedDataFromChild:string = '';
  parentReceivingDataFromChild(data:string){
    this.parentReceivedDataFromChild = data;
  }
}
