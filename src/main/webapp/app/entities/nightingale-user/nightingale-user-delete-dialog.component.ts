import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { INightingaleUser } from 'app/shared/model/nightingale-user.model';
import { NightingaleUserService } from './nightingale-user.service';

@Component({
    selector: 'jhi-nightingale-user-delete-dialog',
    templateUrl: './nightingale-user-delete-dialog.component.html'
})
export class NightingaleUserDeleteDialogComponent {
    nightingaleUser: INightingaleUser;

    constructor(
        protected nightingaleUserService: NightingaleUserService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.nightingaleUserService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'nightingaleUserListModification',
                content: 'Deleted an nightingaleUser'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-nightingale-user-delete-popup',
    template: ''
})
export class NightingaleUserDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ nightingaleUser }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(NightingaleUserDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.nightingaleUser = nightingaleUser;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/nightingale-user', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/nightingale-user', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}