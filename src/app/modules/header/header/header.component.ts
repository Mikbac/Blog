import { Category } from './../category-model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    categories$: Observable<Category[]> = this.categoryService.categories$;

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {}
}
