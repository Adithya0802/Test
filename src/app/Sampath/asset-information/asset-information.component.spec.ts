import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInformationComponent } from './asset-information.component';

describe('AssetInformationComponent', () => {
  let component: AssetInformationComponent;
  let fixture: ComponentFixture<AssetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
