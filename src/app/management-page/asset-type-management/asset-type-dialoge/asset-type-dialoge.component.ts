import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NetworkCallService } from 'src/app/networkcall.service';

@Component({
  selector: 'app-asset-type-dialoge',
  templateUrl: './asset-type-dialoge.component.html',
  styleUrls: ['./asset-type-dialoge.component.css']
})
export class AssetTypeDialogeComponent {
  assetForm!: FormGroup;
  actionBtn: string = "save"

  assetList = ["Available", "Not Availabe"]
  constructor(private fromBuilder: FormBuilder,
    private api: NetworkCallService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AssetTypeDialogeComponent>) { }


  ngOnInit(): void {
    this.assetForm = this.fromBuilder.group({   
      branchid: ["", Validators.required],  
      assettype: ["", Validators.required],
       })

    console.log(this.editData);
    if (this.editData) {
      this.actionBtn = "update"
      this.assetForm.controls['branchid'].setValue(this.editData.branchid);
      this.assetForm.controls['assettype'].setValue(this.editData.assettype);
       } }

  addAssetType() {

    if (!this.editData)
      if (this.assetForm.valid) {
        this.api.postAssetType(this.assetForm.value)
          .subscribe({
            next: (res) => {
              alert("Asset Type added successfully")
              this.assetForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error while adding the Asset Type")
            }
          })
      }
      else {
        this.updateAssetType();
      }

  }

  updateAssetType() {
    this.api.putAssetType(this.assetForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Updated Successfully");
          this.assetForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the record")
        }
      })
  }

}
