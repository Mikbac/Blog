import { StorageService } from './../../../services/storage.service';
import { Category } from '../models/category-model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    logoUrl: string;
    categories$: Observable<DocumentChangeAction<Category>[]> = this.categoryService.categories$;

    constructor(
        private configurationService: ConfigurationService,
        private categoryService: CategoryService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.setLogo();
    }

    get logoTag(): string {
        return this.configurationService.logoTag;
    }

    setLogo() {
        this.storageService
            .getImageUrl(this.configurationService.logoPath)
            .subscribe((url) => (this.logoUrl = url));
    }
}
