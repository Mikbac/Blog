import { ElementRef } from '@angular/core';
import { TestBed, TestComponentRenderer } from '@angular/core/testing';
import { LazyLoadingDirective } from './lazy-loading.directive';

describe('LazyLoadingDirective', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponentRenderer, LazyLoadingDirective],
        });
    });

    it('should create an instance', () => {
        // let nativeElement = new HTMLImageElement();
        let element = new ElementRef<HTMLImageElement>(null);
        // element.setAttribute('', '')
        const directive = new LazyLoadingDirective(element);
        expect(directive).toBeTruthy();
    });
});
