import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AssetTypeDialogeComponent } from './asset-type-dialoge/asset-type-dialoge.component';
import { NetworkCallService } from 'src/app/networkcall.service';

@Component({
  selector: 'app-asset-type-management',
  templateUrl: './asset-type-management.component.html',
  styleUrls: ['./asset-type-management.component.css']
})
export class AssetTypeManagementComponent {

  displayedColumns: string[] = [ 'branchid', 'assettype','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private matDialog: MatDialog,
    private dialog: MatDialog,
    private api: NetworkCallService) { }

  ngOnInit(): void {

    this.getAllAssetType()
  }

  assetTypeDialog() {
    this.dialog.open(AssetTypeDialogeComponent, {
      // width:'100%',height:'100%'
    }).afterClosed().subscribe(val => {
      if (val == "save") {
        this.getAllAssetType();
      }
    })
  }

  assetmasterDialog() {
    this.matDialog.open(AssetTypeDialogeComponent, {
      // width:'100%',height:'100%'
    })
  }

  getAllAssetType() {
    this.api.getAssetType()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the Records");
        }
      })
  }

  editAssetType(row: any) {
    this.dialog.open(AssetTypeDialogeComponent, {
      width: "30%",
      data: row
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllAssetType();
      }

    })
  }

  deleteAssetType(id: number) {
    this.api.deleteAssetType(id)
      .subscribe({
        next: (res) => {
          alert("Product Deleted Successfully")
          this.getAllAssetType();
        },
        error: () => {
          alert("Error while Deleting the product");
          this.getAllAssetType();
        }
        
      }) }
 

}


