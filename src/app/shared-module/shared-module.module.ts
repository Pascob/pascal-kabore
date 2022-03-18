import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PkExperiencesComponent } from './pk-experiences/pk-experiences.component';
import { PkProjectComponent } from './pk-project/pk-project.component';
import { PkSkillsComponent } from './pk-skills/pk-skills.component';
import { PkFormationComponent } from './pk-formation/pk-formation.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { PkSkillRatingComponent } from './pk-skill-rating/pk-skill-rating.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PkExperiencesComponent, PkProjectComponent, PkSkillsComponent, PkFormationComponent, PkSkillRatingComponent],
  exports: [
    PkExperiencesComponent,
    PkProjectComponent,
    PkSkillsComponent,
    PkFormationComponent
  ],
    imports: [
        CommonModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        MatTooltipModule,
        MatChipsModule,
        MatProgressBarModule,
        NgbRatingModule,
        MatCardModule,
    ]
})
export class SharedModuleModule { }
