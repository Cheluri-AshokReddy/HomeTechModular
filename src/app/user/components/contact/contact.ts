import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NzCardModule,
    SharedModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  contactForm: FormGroup;

  // WhatsApp number
  // India country code: 91
  private whatsappNumber = '919916027283';


  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      email: [
        '',
        Validators.email
      ],

      service: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }


  // =========================================
  // SUBMIT ENQUIRY
  // =========================================

  submitEnquiry(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;
    }


    const formData = this.contactForm.value;


    const message = `
Hello HomeTech Modular & Interiors,

I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Service: ${formData.service}

Message:
${formData.message}
`;


    const encodedMessage =
      encodeURIComponent(message);


    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;


    window.open(
      whatsappUrl,
      '_blank'
    );

  }


  // =========================================
  // DIRECT WHATSAPP
  // =========================================

  openWhatsApp(): void {

    const message =
      'Hello HomeTech Modular & Interiors, I would like to know more about your interior design services.';

    const encodedMessage =
      encodeURIComponent(message);

    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

    window.open(
      whatsappUrl,
      '_blank'
    );

  }

}