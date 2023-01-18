import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccessComponent } from './access/access.component';

@NgModule({
  imports: [BrowserModule, FormsModule, UserAuthenticationModule],
  declarations: [AppComponent, HelloComponent, AccessComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
