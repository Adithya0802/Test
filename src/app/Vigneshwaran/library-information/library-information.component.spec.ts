import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryInformationComponent } from './library-information.component';

describe('LibraryInformationComponent', () => {
  let component: LibraryInformationComponent;
  let fixture: ComponentFixture<LibraryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
