import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkSkillsComponent } from './pk-skills.component';

describe('PkSkillsComponent', () => {
  let component: PkSkillsComponent;
  let fixture: ComponentFixture<PkSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
