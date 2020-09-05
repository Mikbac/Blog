import { Category } from './../category-model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    categories$: Observable<DocumentChangeAction<Category>[]> = this.categoryService.categories$;

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {}
}
