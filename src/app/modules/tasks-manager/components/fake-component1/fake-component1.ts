import { Component, Injector } from '@angular/core';

@Component({
  selector: 'fake-component1',
  template: `
    <div *ngIf="show">
      Invalid Token
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
  `]
})

export class FakeComponent1 {
  public show = true;
  public data: any;

  private _data: any;

  constructor(
    private injector: Injector
  ) {

    this._data = this.injector.get('data');
    console.log(this._data);
  }
}
