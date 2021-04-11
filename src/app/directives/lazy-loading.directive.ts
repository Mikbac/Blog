import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appLazyLoading]',
})
export class LazyLoadingDirective {
    constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
        const supports = 'loading' in HTMLImageElement.prototype;
        console.log('lazy................');

        if (supports && nativeElement !== null) {
            nativeElement.setAttribute('loading', 'lazy');
        } else {
            // TODO fallback to IntersectionObserver
        }
    }
}
