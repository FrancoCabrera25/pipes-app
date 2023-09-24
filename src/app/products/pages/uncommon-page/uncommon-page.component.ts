import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss'],
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Franco';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  //i18Plural
  public clients: string[] = ['Franco', 'Luciana', 'Juan', 'Jose', 'Martin'];
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  //key value pipe
  public person = {
    name: 'franco',
    age: '32',
    address: 'rosario',
  };

  //Asyn Pipe
  public myObservable = interval(2000);

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3500);
  });

  changeClient(): void {
    this.name = 'Luciana';
    this.gender = 'female';
  }

  deleteClient(): void {
    this.clients.shift();
  }
}
