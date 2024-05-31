import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @Input() childReceiverParameter:string = '';
}
