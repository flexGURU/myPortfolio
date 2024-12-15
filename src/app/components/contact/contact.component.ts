import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailJS } from '../../environments/environments';
import  emailjs  from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  form: FormGroup

  constructor(private fb: FormBuilder, private toastr: ToastrService){
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        subject: ['', Validators.required],
        message: ['',  Validators.required],
        

      }
    )

  }

  get formControls(){
    return this.form.controls;
  }

  goToUrl(url){
    window.open(url, "_blank")
  }


  async submit(){

    emailjs.init(emailJS.emailjsconfig.publicKey)
    let response = await emailjs.send(emailJS.emailjsconfig.serviceId, emailJS.emailjsconfig.templateId, {
      from_name: this.form.value.name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.email,
      subject: this.form.value.subject,
      message: this.form.value.message
    })

    console.log(this.form.value);
    

    this.form.reset();
    this.toastr.success('🎉Email sent succesfully🤭')

  }

  


}
