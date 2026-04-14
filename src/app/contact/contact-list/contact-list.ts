// src/app/contact/contact-list/contact-list.ts
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Company } from '../../models/company';
import { CompanyService } from '../../company/company.service';
import { MatSelectModule } from '@angular/material/select';


@Component({
    selector: 'app-contact-list',
    imports: [
        CommonModule,
        MatCardModule,
        RouterLink,
        MatButtonModule,
        MatIcon,
        MatSelectModule

    ],
    templateUrl: './contact-list.html',
    styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {
    public contacts$: Observable<Contact[]> | undefined;
    public companies$?: Observable<Company[]>;

    constructor(
        private contactService: ContactService, private companyService: CompanyService) {
    }

    ngOnInit() {
        this.companies$ = this.companyService.getCompaniesObservable();
        this.getContacts();
    }

    getContacts(companyId?: string) {
        this.contacts$ = this.contactService.getContactsObservable(companyId || null);
    }
}
