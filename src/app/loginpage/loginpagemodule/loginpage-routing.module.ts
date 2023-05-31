import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from '../signin-page/signin-page.component';


const appRoutes: Routes = [
  // { path: 'signin', component:SigninPageComponent },
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
export const Loginpages = []
