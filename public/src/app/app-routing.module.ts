import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'create', component: CreateComponent},
  { path: 'questions', component: QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
