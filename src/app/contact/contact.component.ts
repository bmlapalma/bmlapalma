import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /**
   * Reactive form model for the contact form.
   */
  contactForm: FormGroup;

  /**
   * Success and error messages shown after sending the form.
   */
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  /**
   * Sends the form data via EmailJS when the form is submitted.
   */
  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Do not submit if the form is invalid
      this.contactForm.markAllAsTouched();
      return;
    }

    // TODO: replace these with your own EmailJS service, template and public key
    const serviceID = 'service_g7s6br3';
    const templateID = 'template_cg6l2lp';
    const publicKey = 'H4Uk1kRmXyf3f-J2T';

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      to_email: 'francaroalb@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        this.successMessage = 'Mensaje enviado correctamente. ¡Gracias por contactarnos!';
        this.errorMessage = '';
        this.contactForm.reset();
      }, (err) => {
        console.error('EmailJS error:', err);
        this.errorMessage = 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.';
        this.successMessage = '';
      });
  }
}