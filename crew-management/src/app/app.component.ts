import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewDesginationsComponent } from './crew-desginations/crew-desginations.component';
import { CrewComponent } from './crew/crew.component';
import { SamplecrewComponent } from './samplecrew/samplecrew.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SamplecrewComponent,CrewComponent,ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-management';
}
