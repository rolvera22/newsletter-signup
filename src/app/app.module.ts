import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPhoneComponent } from './vista-phone/vista-phone.component';
import { VistaSuccessComponent } from './vista-success/vista-success.component';
import { EmailserviceService } from './emailservice.service';

@NgModule({
  declarations: [
    AppComponent,
    VistaPhoneComponent,
    VistaSuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
