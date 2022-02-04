import { Component, NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyWebsite';

  myOptions = {
    'placement': 'top',
    'showDelay': 500
}


}
