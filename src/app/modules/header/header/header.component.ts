import { Category } from './../category-model';
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
    categories$: Observable<DocumentChangeAction<Category>[]> = this
        .categoryService.categories$;

    constructor(
        private configurationService: ConfigurationService,
        private categoryService: CategoryService
    ) {}

    ngOnInit(): void {}

    get logoPath(): string {
        return (
            './../../../../assets/image/' + this.configurationService.logoName
        );
    }

    get logoTag(): string {
        return this.configurationService.logoTag;
    }
}
