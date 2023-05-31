import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeDialogeComponent } from './asset-type-dialoge.component';

describe('AssetTypeDialogeComponent', () => {
  let component: AssetTypeDialogeComponent;
  let fixture: ComponentFixture<AssetTypeDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTypeDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTypeDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
