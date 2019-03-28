import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LightDirective } from './light.directive';
import { ShowMoviesDirective } from './show-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SignUpComponent,
    UserProfileComponent,
    LightDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ajout de FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
