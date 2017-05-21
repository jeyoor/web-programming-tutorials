import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { TodoComponent } from './components/todo.component';
import { HomeComponent } from './components/home.component';
import { TodoService} from './Service/todo.service'

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, TodoComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TodoService],
    bootstrap: [AppComponent]

})
export class AppModule { }
