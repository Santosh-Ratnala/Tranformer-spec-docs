import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ElectricalComponent} from './electrical/electrical.component';
import {MechanicalComponent} from './mechanical/mechanical.component';
import {ControlsComponent} from './controls/controls.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
},
  {
    path: 'electrical',
    component: ElectricalComponent
  },
  {
    path : 'mechanical',
    component: MechanicalComponent
  },
  {
    path : 'controls',
    component: ControlsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
