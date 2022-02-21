import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkProjectComponent } from './pk-project.component';

describe('PkProjectComponent', () => {
  let component: PkProjectComponent;
  let fixture: ComponentFixture<PkProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
