import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {
    public loading: boolean;

    constructor(private loaderService: LoaderService) {
        this.loaderService.isLoading.subscribe((v) => {
            this.loading = v;
        });
    }

    ngOnInit() {}
}
