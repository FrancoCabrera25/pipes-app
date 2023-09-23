import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'franco';
  public nameUpper: string = 'FRANCO';
  public fullName: string = 'fRaNcO cAbReRa';
  public customDate: Date = new Date();
}
