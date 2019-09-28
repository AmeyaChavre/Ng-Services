import { Component } from '@angular/core';
import { AccountsService } from '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

accounts: {name: string, status: string}[] = []

constructor(private accountsService: AccountsService) {}

}
