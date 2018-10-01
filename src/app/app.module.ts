import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

function initLoad() {
	return () => {
		return new Promise((resolve, reject) => {
			console.log('this is a test');
			resolve(true);
		});
	};
}

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initLoad,
			multi: true,
			deps: [],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
