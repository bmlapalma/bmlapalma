import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Inicializa EmailJS con tu public key
    emailjs.init({ publicKey: 'H4Uk1kRmXyf3f-J2T' });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const serviceID = 'service_g7s6br3';
    const templateID = 'template_cg6l2lp';

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      mensaje: this.contactForm.value.message
    };

    emailjs.send(
      'service_nknc0gh',              // tu Service ID
      'template_gvwafq5',             // tu Template ID
      templateParams,
      { publicKey: 'WmdULePB4FpkMd8YV' }  // clave pública
    ).then(() => {
      this.successMessage = 'Mensaje enviado correctamente.';
      this.errorMessage = '';
      this.contactForm.reset();
    }).catch((err) => {
      console.error('EmailJS error:', err);
      this.errorMessage = 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.';
      this.successMessage = '';
    });

  }
}
