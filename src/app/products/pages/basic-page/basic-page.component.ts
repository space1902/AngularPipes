import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'victor ortiz';
  public nameUpper: string = 'VICTOR ORTIZ';
  public fullName: string = 'vICtOR oRtIZ';

  public customDate: Date = new Date();

}
