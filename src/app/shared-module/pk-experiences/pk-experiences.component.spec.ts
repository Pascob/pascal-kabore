import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkExperiencesComponent } from './pk-experiences.component';

describe('PkExperiencesComponent', () => {
  let component: PkExperiencesComponent;
  let fixture: ComponentFixture<PkExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
