import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, HeaderRoutingModule, NgxSpinnerModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
