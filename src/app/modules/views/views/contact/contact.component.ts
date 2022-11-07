// Modules
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

// Model
import { Message, CreateMessageDTO } from '../../models/message.model';

// Service
import { MessageService } from '../../services/message.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

	// Init variables
	messages: Message[] = [];

	// ReactiveForm -> contactForm
	contactForm = this.fb.group({

		name: ['', Validators.required],
		email: ['', Validators.required],
		subject: ['', Validators.required],
		message: ['', Validators.required]

	});

	// Constructor of Service and tools
	constructor(

		private fb: FormBuilder,
		private messageService: MessageService,

	) {
		// this.contactForm = this._buildForm()
	}

	ngOnInit(): void { }

	// Create a message with contactForm data.
	createNewMessage(contactValue: any) {

		const message: CreateMessageDTO = {
			name: contactValue.name,
			email: contactValue.email,
			subject: contactValue.subject,
			message: contactValue.message
		}

		this.messageService.postMessage(message)
			.subscribe({
				next: (resIter: any) => {
					console.log(resIter);
					this.messages.unshift(message);
					const name = this.contactForm.value.name
					const email = this.contactForm.value.email
					alert(`
Thanks a lot for contact-us!! 	name: ${name}
We will be in contact with you!! at email: ${email}
								`)
				},
				error: () => { }
			})

	}

	// When the component detect an event click, validate the form and submit
	onSubmit() {

		if (this.contactForm.valid) {

			this.createNewMessage(this.contactForm.value)
			this.contactForm.reset();
			console.log('contactForm Send')

		} else {
			console.log('Sorry!! we can`t send the contactForm ')
			this.contactForm.markAllAsTouched()
		}

		console.warn(this.contactForm.value);
	}

	// harcode the contactForm
	private _buildForm(): FormGroup {
		return this.fb.group({
			name: [
				'Anthony',
				{ nonNullable: true, validators: [Validators.required] },
			],
			email: [
				'ing.ajfernandez@gmail.com',
				{ nonNullable: true, validators: [Validators.required] },
			],
			subject: [
				'Nuevo titulo del mensaje',
				{ nonNullable: true, validators: [Validators.required] },
			],
			message: [
				'Mensaje enviado por defecto, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
				{ nonNullable: true, validators: [Validators.required] },
			],
		})
	}
}

//// Suplabtar por el modelo arriba.
// Harcode object message
// createNewMessage() {
//   const message: CreateMessageDTO = {
//     name: "Tomas",
//     email: "Tomas@user.com",
//     subject: "Titulo del mensaje enviado por Tomas",
//     message: "Mensaje enviado por Tomas, desde la vista contactos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
//   }

//   this.messageService.postMessage(message)
//     .subscribe(message => {
//       this.messages.unshift(message);
//     });
//   // this.contactForm.value.name


// alert(`
// Thanks a lot for contact-us!! 	name: ${name}
// We will be in contact with you!! at email: ${email}
// 			`)