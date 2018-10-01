import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';

const routes: Routes = [{ path: 'cmp1', component: Cmp1Component }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Mod1RoutingModule {}
