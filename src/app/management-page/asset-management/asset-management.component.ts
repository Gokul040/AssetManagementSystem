import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { NetworkCallService } from 'src/app/networkcall.service';
import { data, event } from 'jquery';


@Component({
  selector: 'app-asset-management',
  templateUrl: './asset-management.component.html',
  styleUrls: ['./asset-management.component.css']
})
export class AssetManagementComponent implements OnInit {
  

      displayedColumns: string[] = ['name', 'placeno', 'branchid', 'assetid', 'lockercode', 'location', 'assettype', 'assetstatus','createdDate','updatedDate', 'action'];
      dataSource!: MatTableDataSource<any>;
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;
      columnFilter:any;
      columValue1:any;
      columValue2:any;
  
    
      constructor(private matDialog: MatDialog, private dialog: MatDialog, private api: NetworkCallService) {}

      ngOnInit(): void {
        this.getAllProduct();
          
      this.dataSource = new MatTableDataSource<any>(this.displayedColumns)

          
      }
    
      assetDialog() {
        this.dialog.open(AssetDialogComponent, {
          
        }).afterClosed().subscribe(val => {
          this.getAllProduct();
          if (val == "save") {
            this.getAllProduct();
          }
        })
      }
    
    
      getAllProduct() {
        this.api.getProduct()
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
    
      editProduct(row: any) {
        this.dialog.open(AssetDialogComponent, {
          data: row
        }).afterClosed().subscribe(val => {
          if (val === "update") {
            this.getAllProduct();
          }
        })
      }
    
    
      deleteProduct(id: number) {
        this.api.deleteProduct(id)
          .subscribe({
            next: (res) => {
              alert("Asset Deleted Successfully")
              this.getAllProduct();
            },
            error: () => {
              alert("Error while Deleting the Asset");
              this.getAllProduct();
            }
          })
      }

// Filter methods---------------------------------------------------------------------------
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    applyColumnFilter(filterValue:string, column:string){
      filterValue = filterValue.trim().toLowerCase();
      this.dataSource.filterPredicate = (data:any,filter:string)=>{
        const column1Value = data['branchid'].toString().toLowerCase();
        const column2Value = data['assetstatus'].toString().toLowerCase();
        return column1Value.includes(this.columValue1) && column2Value.includes(this.columValue2);
      };
      if(column === 'branchid' ){
        this.columValue1 = filterValue;
      } else if ( column === 'assetstatus'){
        this.columValue2 = filterValue;
      }
      this.dataSource.filter = filterValue;
    }

    getdisplayedColumnValuesBranch(column:string): string[]{
        return Array.from(new Set (this.dataSource.data.map((data:any)=> data['branchid'])));
    }

    getdisplayedColumnValuesStatus(column:string): string[]{
      return Array.from(new Set (this.dataSource.data.map((data:any)=> data['assetstatus'])));
  }


    applyColumnFilterStatus(filterValue:string, column:string){
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data:any,filter:string)=>{
      const columnValue = data['assetstatus'].toString().toLowerCase();
      return columnValue.includes(filter);
    };
    this.dataSource.filter = filterValue;
  }

  applyColumnFilterID(filterValue:string, column:string){
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data:any,filter:string)=>{
      const columnValue = data['branchid'].toString().toLowerCase();
      return columnValue.includes(filter);
    };
    this.dataSource.filter = filterValue;
  }
}

