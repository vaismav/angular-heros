import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { LoginComponent}  from './login/login.component'


const routes: Routes = [
  {path: 'heroes', component: HerosComponent},
  {path: 'dashboard', component:DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
