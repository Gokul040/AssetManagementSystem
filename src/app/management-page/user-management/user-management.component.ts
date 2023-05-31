import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NetworkCallService } from 'src/app/networkcall.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { error } from 'jquery';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

  displayedColumns: string[] = ['firstname','lastname', 'contactno', 'emailid', 'role','status', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private matDialog: MatDialog, private dialog: MatDialog, private api: NetworkCallService) {}

  ngOnInit(): void {
    this.getAllUser()
  }

  userDialog() {
    this.dialog.open(UserDialogComponent, {
    }).afterClosed().subscribe(val => {
      if (val == "save") {
        this.getAllUser();
      }
    })
  }



  getAllUser() {
    this.api.getUser()
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

  editUser(row: any) {
    this.dialog.open(UserDialogComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllUser();
      }
    })
  }


  deleteUser(id: number) {
    this.api.deleteUser(id)
      .subscribe({
        next: (res) => {
          alert("User Deleted Successfully" )
          this.getAllUser();
        },
        error: () => {
          alert("Error while Deleting the User" + error);
          this.getAllUser();
        }
      })
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
