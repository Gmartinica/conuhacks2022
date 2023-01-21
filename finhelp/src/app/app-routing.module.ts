import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { InfoFormComponent } from './info-form/info-form.component';

const routes: Routes = [
    {
        path: 'create',
        component: InfoFormComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
