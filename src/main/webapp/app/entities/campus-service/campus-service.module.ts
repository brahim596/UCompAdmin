import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UCompAdminSharedModule } from 'app/shared/shared.module';
import { CampusServiceComponent } from './campus-service.component';
import { CampusServiceDetailComponent } from './campus-service-detail.component';
import { CampusServiceUpdateComponent } from './campus-service-update.component';
import { CampusServiceDeleteDialogComponent } from './campus-service-delete-dialog.component';
import { campusServiceRoute } from './campus-service.route';

@NgModule({
  imports: [UCompAdminSharedModule, RouterModule.forChild(campusServiceRoute)],
  declarations: [CampusServiceComponent, CampusServiceDetailComponent, CampusServiceUpdateComponent, CampusServiceDeleteDialogComponent],
  entryComponents: [CampusServiceDeleteDialogComponent]
})
export class UCompAdminCampusServiceModule {}
