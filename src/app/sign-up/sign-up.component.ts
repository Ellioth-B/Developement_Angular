import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit 
{
  email ;

  model: Order = new Order();

  constructor() { }

  onSubmit(form: NgForm)
  {
    console.log('form submitted/envoyer');
    // console.log((form.valid) ? ('Le formulaire est valide !') : (`Le formulaire n'est pas valide !`));
    if (form.valid)
    {
      console.log('Le formulaire est valide !')
    } 
    else
    {
      console.log(`Le formulaire n'est pas valide !`)
    }
  }
  ngOnInit() {
  }
  
}
