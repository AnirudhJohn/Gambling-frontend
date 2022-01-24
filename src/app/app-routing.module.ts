import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { DashlayoutComponent } from './Dashboard/dashlayout/dashlayout.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'dash', component: DashlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
