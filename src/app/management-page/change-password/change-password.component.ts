import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  userName:string = 'Admin'
  userNumber:number = 434324324;
  userEmail:string = 'admin@mail.com'
  role:string='Admin'
  // password:string='sfsf'
  profileForm: FormGroup;


    error_messages = {

      'password': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'Enter Minimum 8 Characters.' },
        { type: 'maxlength', message: 'Enter below 16 characters.' }
      ],
      'confirmpassword': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'Enter Minimum 8 Characters.' },
        { type: 'maxlength', message: 'Enter below 16 characters.' }
      ],
    }
 
    constructor(
      public formBuilder: FormBuilder
    ) {
      this.profileForm = this.formBuilder.group({
        //  userName: new FormControl(),
        //  userEmail: new FormControl(),
        //  userNumber: new FormControl(),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ])),
        confirmpassword: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ])),
      }, {validators : this.Mustmatch('password','confirmpassword')}
      )
  }


    Mustmatch(pass:any,conpass:any){
      return(formGroup:FormGroup) => {
        const passctrl = formGroup.controls['password'];
        const conpassctrl = formGroup.controls['confirmpassword'];
  
        if(conpassctrl.errors && !conpassctrl.errors['Mustmatch']){
          return;
        }
        if(passctrl.value!==conpassctrl.value){
          conpassctrl.setErrors({Mustmatch:true});
        }else{
          conpassctrl.setErrors(null);
        }
      }
    }

    get f(){
      return this.profileForm.controls;
    }

    Password(formGroup: FormGroup) {
      const password = formGroup.get('password');
      const confirmPassword  = formGroup.get('confirmpassword');
      return password === confirmPassword ? null : { passwordNotMatch: false };
    }
  
}
