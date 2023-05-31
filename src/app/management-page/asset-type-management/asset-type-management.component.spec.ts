import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeManagementComponent } from './asset-type-management.component';

describe('AssetTypeManagementComponent', () => {
  let component: AssetTypeManagementComponent;
  let fixture: ComponentFixture<AssetTypeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTypeManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
