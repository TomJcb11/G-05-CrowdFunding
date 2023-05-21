import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CookieModule } from 'ngx-cookie';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CreateProjectComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CookieModule.withOptions({
            sameSite: 'lax'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
