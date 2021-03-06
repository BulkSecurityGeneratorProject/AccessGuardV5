import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessGuardV5SharedModule } from 'app/shared';
import {
    AgreementOrganisationComponent,
    AgreementOrganisationDetailComponent,
    AgreementOrganisationUpdateComponent,
    AgreementOrganisationDeletePopupComponent,
    AgreementOrganisationDeleteDialogComponent,
    agreementOrganisationRoute,
    agreementOrganisationPopupRoute
} from './';

const ENTITY_STATES = [...agreementOrganisationRoute, ...agreementOrganisationPopupRoute];

@NgModule({
    imports: [AccessGuardV5SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AgreementOrganisationComponent,
        AgreementOrganisationDetailComponent,
        AgreementOrganisationUpdateComponent,
        AgreementOrganisationDeleteDialogComponent,
        AgreementOrganisationDeletePopupComponent
    ],
    entryComponents: [
        AgreementOrganisationComponent,
        AgreementOrganisationUpdateComponent,
        AgreementOrganisationDeleteDialogComponent,
        AgreementOrganisationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessGuardV5AgreementOrganisationModule {}
