// model for message-form

export interface Message {
    name: string,
    email: string,
    subject: string,
    message: string,
}


export interface CreateMessageDTO extends Omit<Message, 'id'> { }


// interface Messageasd extends Messageasd {
//     id: string
// }

// export interface Messages<T> {

//     name: string,
//     email: string,
//     subject: string,
//     message: T,
// }

// const mensaje: Messages<string>