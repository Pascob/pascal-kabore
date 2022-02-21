import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkSkillRatingComponent } from './pk-skill-rating.component';

describe('PkSkillRatingComponent', () => {
  let component: PkSkillRatingComponent;
  let fixture: ComponentFixture<PkSkillRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkSkillRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkSkillRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
