import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { AccountsManagerComponent } from './accounts-manager/accounts-manager.component';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';
import { AccountsConfigComponent } from './accounts-config/accounts-config.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { IntegratedModeComponent } from './integrated-mode/integrated-mode.component';
import { ProfilePolicyComponent } from './profile-policy/profile-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AccountsManagerComponent,
    AccountsDashboardComponent,
    AccountsConfigComponent,
    ProfileSettingsComponent,
    IntegratedModeComponent,
    ProfilePolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
