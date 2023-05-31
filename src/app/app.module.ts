import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { LoginpagemoduleModule } from './loginpage/loginpagemodule/loginpagemodule.module';
import { LoginpageRoutingModule } from './loginpage/loginpagemodule/loginpage-routing.module';
import { ManagementRoutingModuleModule } from './management-page/management-page-module/management-routing-module.module';
import { ManagementPageModuleModule } from './management-page/management-page-module/management-page-module.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DataTablesModule } from 'angular-datatables';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AssetDialogComponent } from './management-page/asset-management/asset-dialog/asset-dialog.component';
import { MatSortModule} from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableExporterModule } from 'mat-table-exporter';
import { UserDialogComponent } from './management-page/user-management/user-dialog/user-dialog.component';
import { AssetTypeDialogeComponent } from './management-page/asset-type-management/asset-type-dialoge/asset-type-dialoge.component';


@NgModule({
  declarations: [
    AppComponent,AssetDialogComponent,UserDialogComponent, AssetTypeDialogeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,LoginpagemoduleModule,
    LoginpageRoutingModule,
    ManagementPageModuleModule,ManagementRoutingModuleModule,
    MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule,MatListModule,MatMenuModule,MatDialogModule
  ,MatDividerModule,FlexLayoutModule,FormsModule,MatInputModule,MatCardModule,MatTableModule,MatSelectModule,MatOptionModule,DataTablesModule,MatFormFieldModule,
  MatRadioModule,MatAutocompleteModule,ReactiveFormsModule,MatTooltipModule,HttpClientModule,MatPaginatorModule,MatDatepickerModule,MatExpansionModule,MatTableExporterModule
,MatSortModule, _MatSlideToggleRequiredValidatorModule],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AssetDialogComponent,UserDialogComponent],
})
export class AppModule { }
