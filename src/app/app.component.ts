import { Component } from '@angular/core'
import { environment } from './../environments/environment';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    console.log("Dev Environment: ", environment.production)
  }
}
