// Angular tools
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// Model
import { Message, CreateMessageDTO } from '../../models/message.model';
// Service
import { MessageService } from '../../services/message.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
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
		private messageService: MessageService,) {
		// this.contactForm = this._buildForm()
	}
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
			name: ['Anthony', { nonNullable: true, validators: [Validators.required] },],
			email: ['ing.ajfernandez@gmail.com', { nonNullable: true, validators: [Validators.required] },],
			subject: ['Nuevo titulo del mensaje', { nonNullable: true, validators: [Validators.required] },],
			message: ['Mensaje enviado por defecto, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', { nonNullable: true, validators: [Validators.required] },],
		})
	}
}