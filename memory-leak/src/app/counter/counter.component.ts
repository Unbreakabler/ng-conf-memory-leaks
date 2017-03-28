import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: [ './counter.component.css' ],
})
export class CounterComponent implements OnInit, OnDestroy {

  public count: number;
  public subscription: any;
  public bigArray = [];

  constructor(
    private appService: AppService,
    private elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    for (let i = 0; i < 10000; i++) {
      this.bigArray[i] = Object.assign({}, this.elementRef);
    }
    this.subscription = this.appService.polling$.subscribe((x) => {
      this.count = x;
    });
    this.appService.initializePolling();
  }

  public ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // this.appService.stopPolling();
  }
}
