import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  public showCounter = true;

  public message;

  constructor(
    private elementRef: ElementRef,
  ) {}

  public ngOnInit(): void {}

  public toggleCounter(): void {
    this.showCounter = !this.showCounter;
  }
}
