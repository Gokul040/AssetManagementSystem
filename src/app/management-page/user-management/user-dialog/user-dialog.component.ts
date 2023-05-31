import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NetworkCallService } from 'src/app/networkcall.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  userForm!: FormGroup;
    actionBtn: string = "Save"
    hide = true;
    isChecked : boolean = true;
    isStatus:boolean=true;

    constructor(private fromBuilder: FormBuilder,
      private api: NetworkCallService,
      @Inject(MAT_DIALOG_DATA) public editData: any,
      private dialogRef: MatDialogRef<UserDialogComponent>
      ) { } 
  
    ngOnInit(): void {
      this.userForm = this.fromBuilder.group({
        firstname: ["", [ Validators.required]],
        lastname: ["", [ Validators.required]],
        contactno: ["", Validators.required],
        emailid: ["", Validators.required],
        password: ["", Validators.required],
        role: ["", Validators.required],
        status: ["", Validators.required],
      })
  
      console.log(this.editData);
      if (this.editData) {
        this.actionBtn = "Update"
        this.isStatus = true;
        this.userForm.controls['firstname'].setValue(this.editData.firstname);
        this.userForm.controls['lastname'].setValue(this.editData.lastname);
        this.userForm.controls['contactno'].setValue(this.editData.contactno);
        this.userForm.controls['emailid'].setValue(this.editData.emailid);
        this.userForm.controls['password'].setValue(this.editData.password);
        this.userForm.controls['role'].setValue(this.editData.role); 
        this.userForm.controls['status'].setValue(this.editData.status);
      }
  
    }
  
    addUser() {
      if (!this.editData)
        if (this.userForm.valid) {
          
          this.api.postUser(this.userForm.value)
            .subscribe({
              next: (res) => {
                alert("User added successfully")
                this.userForm.reset();
                this.dialogRef.close('save');
              },
              error: () => {
                alert("Error while adding the User")
              }
            })
        }
        else {
          this.updateUser();
        } 
    }
  
    updateUser() {
      this.api.putUser(this.userForm.value, this.editData.id)
        .subscribe({
          next: (res) => {
            alert("Updated Successfully");
            this.userForm.reset();
            this.dialogRef.close('update');
          },
          error: () => {
            alert("Error while updating the record")
          }
        })
}
}
