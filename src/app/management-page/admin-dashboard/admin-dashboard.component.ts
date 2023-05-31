import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NetworkCallService } from 'src/app/networkcall.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit {

 
        dashBoardData: any;
        dashBoardUserData:any;

        total: any;
        activeAssets:any;
        nonActiveAssets:any;
        assetData:any;

      public assetDetails = {
        name: '',
        placeno: '',
        branchid: '',
        assetid: '',
        lockercode: '',
        location: '',
        assettype: '',
        assetstatus: '',
      
        
      }


      constructor(private api: NetworkCallService){}
        ngOnInit(): void {
          this.getAllAsset();
          this.getAllProduct();        
          this.getAllUser();
        }


      getAllAsset() {
        this.api.getAllAssetDetailsinDashboard()
          .subscribe((res: Data[]) => {
              this.assetData = res;
            this.total = res.length
            console.log(this.total)
            this.activeAssets = res.filter(item => item['assetstatus'] === 'Available').length;
            this.nonActiveAssets = res.filter(item => item['assetstatus'] === 'Not Availabe').length;
              console.log(this.activeAssets);
              console.log(this.nonActiveAssets);
            })
      }
    

      getAllProduct() {
        this.api.getAllAssetDetailsinDashboard()
          .subscribe((res: Data[]) => {
            console.log(res)      
        this.dashBoardData = res.sort((a,b) =>
        new Date(b['CreatedDate']).getTime() - new Date(a['CreatedDate']).getTime()
        ).slice(0,5)
            });
      }

      getAllUser() {
        this.api.getUser()
          .subscribe((res : Data[]) => {
            console.log(res)      
        this.dashBoardUserData = res.length
            })
        }
      
        viewData(assetdata:any) {
          this.assetDetails = assetdata;
          console.log(assetdata)
        }


}
