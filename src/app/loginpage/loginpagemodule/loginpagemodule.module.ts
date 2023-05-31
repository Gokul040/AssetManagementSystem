import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginpageComponent } from '../loginpage.component';
import { LoginpageRoutingModule } from './loginpage-routing.module';
import { CommonModule } from '@angular/common';
import { Loginpages } from './loginpage-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SigninPageComponent } from '../signin-page/signin-page.component';


@NgModule({
  declarations: [
    LoginpageComponent,Loginpages, SigninPageComponent,
  ],
  imports: [
     CommonModule, MatSlideToggleModule,LoginpageRoutingModule,BrowserAnimationsModule,BrowserModule,
     FlexLayoutModule,
     FormsModule,
     MatToolbarModule,
     MatInputModule,
     MatCardModule,
     MatMenuModule,
     MatIconModule,
     MatButtonModule,
     MatTableModule,
     MatSlideToggleModule,
     MatSelectModule,
     MatOptionModule,ReactiveFormsModule
]})

export class LoginpagemoduleModule { }
