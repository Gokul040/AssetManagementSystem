import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  title = 'Asset Management';
  public loginValid = true;
  public username = '';
  public password = '';
  passwordform: FormGroup;

  isSignin: boolean = true;
  isforgotPassword: boolean = false;
  isConfirmPassword:boolean = false;

  onSubmit(){}
    
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
    public formbuilder: FormBuilder
  ) {
    this.passwordform = this.formbuilder.group({
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
  return this.passwordform.controls;
}

Password(formGroup: FormGroup) {
  const password = formGroup.get('password');
  const confirmPassword  = formGroup.get('confirmpassword');
  return password === confirmPassword ? null : { passwordNotMatch: false };
}

  isforgot(){
    this.isSignin = false;
    this.isforgotPassword = true;
    this.isConfirmPassword = false;
  }
  isSigninpage(){
    this.isSignin = true;
    this.isforgotPassword = false;
    this.isConfirmPassword = false;
  }
  isConfirmPasswords(){
    this.isSignin = false;
    this.isforgotPassword = false;
    this.isConfirmPassword = true;
  }

}
