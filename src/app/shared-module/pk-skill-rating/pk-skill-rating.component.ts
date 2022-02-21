import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pk-skill-rating',
  templateUrl: './pk-skill-rating.component.html',
  styleUrls: ['./pk-skill-rating.component.css']
})
export class PkSkillRatingComponent implements OnInit {
  @Input() size = 5;
  @Input() mark = 3;
  @Input() color = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
