import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AssetManagementComponent } from '../asset-management/asset-management.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { AssetTypeManagementComponent } from '../asset-type-management/asset-type-management.component';
import { ManagementPageComponent } from '../management-page.component';
import { HelpComponent } from '../help/help.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';



const appRoutes: Routes = [
  { path: 'adminManagement', component: ManagementPageComponent,
  children: [{ path: 'adminDashboard', component: AdminDashboardComponent, },
  { path: 'assetManagement', component: AssetManagementComponent},
  { path: 'userManagement', component: UserManagementComponent},
  { path: 'assetType', component: AssetTypeManagementComponent},
  { path: 'help', component: HelpComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  
]
},  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes)],
  exports: [RouterModule]
})
export class ManagementRoutingModuleModule { }
export const managementpages = [AdminDashboardComponent,AssetManagementComponent,AssetTypeManagementComponent,UserManagementComponent,HelpComponent,ChangePasswordComponent]

