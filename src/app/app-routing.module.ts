import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaSuccessComponent} from './vista-success/vista-success.component';
import { VistaPhoneComponent } from './vista-phone/vista-phone.component';

const routes: Routes = [

{
path:'success',
component:VistaSuccessComponent
},

{
path:'',
component:VistaPhoneComponent

}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
