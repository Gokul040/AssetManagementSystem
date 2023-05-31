import { FormatWidth } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, ɵLocaleDataIndex, ɵfindLocaleData } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NetworkCallService } from 'src/app/networkcall.service';


@Component({
  selector: 'app-asset-dialog',
  templateUrl: './asset-dialog.component.html',
  styleUrls: ['./asset-dialog.component.css']
})
export class AssetDialogComponent implements OnInit {
 
  productForm!: FormGroup;
    actionBtn: string = "Save"
    animation: boolean = false;

    assetList = ["Available", "Not Availabe"]

    constructor(private fromBuilder: FormBuilder,
      private api: NetworkCallService,
      @Inject(MAT_DIALOG_DATA) public editData: any,
      private dialogRef: MatDialogRef<AssetDialogComponent>
      ) { 
      }
  
  
    ngOnInit(): void {
      this.productForm = this.fromBuilder.group({
        name: ["", [Validators.pattern(/\s/), Validators.required]],
        placeno: ["", Validators.required],
        branchid: ["", Validators.required],
        assetid: ["", Validators.required],
        lockercode: ["", Validators.required],
        location: ["", Validators.required],
        assettype: ["", Validators.required],
        assetstatus: ["A", Validators.required],

      })
  
      console.log(this.editData);
      if (this.editData) {
        this.actionBtn = "Update"
        this.productForm.controls['name'].setValue(this.editData.name);
        this.productForm.controls['placeno'].setValue(this.editData.placeno);
        this.productForm.controls['branchid'].setValue(this.editData.branchid);
        this.productForm.controls['assetid'].setValue(this.editData.assetid);
        this.productForm.controls['lockercode'].setValue(this.editData.lockercode);
        this.productForm.controls['location'].setValue(this.editData.location);
        this.productForm.controls['assettype'].setValue(this.editData.assettype);
        this.productForm.controls['assetstatus'].setValue(this.editData.assetstatus);
 
      }
  
    }

   
  
    addProduct() {
     
      if (!this.editData)
        if (this.productForm.valid) {
         
          this.api.postProduct(this.productForm.value)
            .subscribe({
              next: (res) => {
                this.animation = true;
                // alert("Product added successfully")
                // this.productForm.reset();
                // this.dialogRef.close('save');  
                
              },
              error: () => {
                alert("Error while adding the product")
              }
            })
        }
        else {
          this.updateProduct();
        }
  
    }
  
    updateProduct() {
      this.api.putProduct(this.productForm.value, this.editData.id)
        .subscribe({
          next: (res) => {
            // alert("Updated Successfully");
            // this.productForm.reset();
            // this.dialogRef.close('update');
            this.animation = true;
          },
          error: () => {
            alert("Error while updating the record")
          }
        })
}

// new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]]) 
}

