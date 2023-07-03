import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailserviceService } from '../emailservice.service';

@Component({
  selector: 'app-vista-success',
  templateUrl: './vista-success.component.html',
  styleUrls: ['./vista-success.component.css']
})
export class VistaSuccessComponent {
email!:string;


  constructor (private router: Router, public emailService:EmailserviceService ) {

    this.email=emailService.email;


  }

  onSubmit() {
    this.router.navigate(['/']);
  }



}
