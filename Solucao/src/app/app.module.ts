import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing }  from './app.routes';
import { MenuComponent }  from './Menu/menu.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule, 
        routing, 
    ],
    declarations: [ AppComponent, MenuComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }