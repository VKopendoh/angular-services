import {Component} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCounterService} from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService] // that's how to provide local service
})
export class AppComponent {
  // DI service via constructor
  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService) {
  }
}
