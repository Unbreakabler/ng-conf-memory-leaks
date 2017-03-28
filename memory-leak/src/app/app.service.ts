import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
// import { Http, Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class AppService {
  public polling$: Subject<any> = new Subject<any>();
  private subscriptions: any = [];
  private subCount = 0;

  constructor() {}

  public initializePolling(): void {
    if (this.subCount < 1) {
      this.subCount++;
      this.subscriptions.push(Observable.interval(500).subscribe((x) => {
        this.polling$.next(x);
      }));
    } else {
      this.subscriptions.push(Observable.interval(500).subscribe((x) => {
        console.log(this);
      }));
    }
  }

  public stopPolling(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    // this.subCount = 0;
  }
}
