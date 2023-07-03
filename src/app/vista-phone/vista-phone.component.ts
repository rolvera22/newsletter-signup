import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailserviceService } from '../emailservice.service';



@Component({
  selector: 'app-vista-phone',
  templateUrl: './vista-phone.component.html',
  styleUrls: ['./vista-phone.component.css'],
 
})

export class VistaPhoneComponent {

email!:string;
mail!:string;

constructor (private router: Router , private emailService:EmailserviceService) {}


onSubmit() {

  if (this.email === '') {
    return; 
  }

  this.router.navigate(['/success']);
  this.emailService.email = (document.getElementById ('email') as HTMLInputElement).value;
  
  

}

}
