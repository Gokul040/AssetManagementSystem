import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPageComponent } from '../management-page.component';
import { ManagementRoutingModuleModule, managementpages } from './management-routing-module.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AssetManagementComponent } from '../asset-management/asset-management.component';
import { AssetTypeManagementComponent } from '../asset-type-management/asset-type-management.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HelpComponent } from '../help/help.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ChangePasswordComponent } from '../change-password/change-password.component';



@NgModule({
  declarations: [
    ManagementPageComponent,
    AdminDashboardComponent,
    AssetManagementComponent,
    UserManagementComponent,
    AssetTypeManagementComponent,managementpages,HelpComponent,ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModuleModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule
    ,MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,MatButtonModule,MatMenuModule,MatDialogModule,MatDividerModule,BrowserModule,FormsModule
  ,DataTablesModule,MatFormFieldModule,MatSelectModule,MatFormFieldModule,
  MatRadioModule,MatAutocompleteModule,MatTooltipModule,HttpClientModule,MatPaginatorModule,MatDatepickerModule,
  MatExpansionModule,MatCardModule,FlexLayoutModule,MatTableModule,MatSortModule,MatTableExporterModule
  , _MatSlideToggleRequiredValidatorModule],
  exports:
  [
  ]
})
export class ManagementPageModuleModule {

}
