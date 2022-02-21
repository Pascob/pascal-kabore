import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkFormationComponent } from './pk-formation.component';

describe('PkFormationComponent', () => {
  let component: PkFormationComponent;
  let fixture: ComponentFixture<PkFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
