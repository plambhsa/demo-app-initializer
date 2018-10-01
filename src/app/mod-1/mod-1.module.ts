import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod-1-routing.module';
import { Cmp1Component } from './cmp1/cmp1.component';

@NgModule({
  imports: [
    CommonModule,
    Mod1RoutingModule
  ],
  declarations: [Cmp1Component]
})
export class Mod1Module { }
