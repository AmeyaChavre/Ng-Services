import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements Oninit {

accounts: {name: string, status: string}[] = []

constructor(private accountsService: AccountsService) {}

}
