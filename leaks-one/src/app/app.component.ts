import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}

  public log(): void {
    for (let i = 0; i < 100; i++ ) {
      console.log(this.buildObject()); 
    }
  }
  private buildObject(): any {
    let obj = [];
    for (let i = 0; i < 100; i++) {
      obj[i] = Object.assign(this.elementRef);
    }
    return obj;
  }
}
