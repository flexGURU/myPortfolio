import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form: FormGroup

  constructor(private fb: FormBuilder){
    this.form = this.fb.group{
      
    }

  }

  goToUrl(url){
    window.open(url, "_blank")
  }
}
