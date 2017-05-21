import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'todo', component: TodoComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);