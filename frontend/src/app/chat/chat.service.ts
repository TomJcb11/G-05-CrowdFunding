
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Message, User} from './model'

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    messages: Message[] = []
    users: User[] = []
    private apiUrl = 'http://localhost:8080/'; // Replace with the correct URL for your Express server

    constructor(private http: HttpClient) {
    }

    sendMessage(user_id: number, projet_id: number, chat_message: string) {
        const data= {
            user_id,
            projet_id,
            chat_message,
        };

        
        return this.http.post<any>(`${this.apiUrl}api/chats`, data);
    }

    async getUsers() {
        const users = await this.http.get<User[]>(`${this.apiUrl}api/users`).toPromise()
        users?.map(user => this.users.push(user))
    }

    async getMessages() {
        const msg = await this.http.get<Message[]>(`${this.apiUrl}api/chats`).toPromise()
        msg?.map(ms => this.messages.push(ms))
    }
}


// import {HttpClient} from '@angular/common/http';
// import {Injectable} from '@angular/core';
// import {Message, User} from './model'



// @Injectable({
//     providedIn: 'root',
// })
// export class ChatService {
//     messages: Message[] = []
//     users: User[] = []
//     private apiUrl = 'http://localhost:8080/'; // Replace with the correct URL for your Express server

//     constructor(private http: HttpClient) {
//     }

//     sendMessage(user_id: number, projet_id: number, chat_message: string) {
//         const data= {
//             user_id,
//             projet_id,
//             chat_message,
//         };

//         return this.http.post<any>(`${this.apiUrl}api/chats`, data);
//     }

//     async getUsers() {
//         const users = await this.http.get<User[]>(`${this.apiUrl}api/users`).toPromise()
//         users?.map(user => this.users.push(user))
//     }

//     async getMessages() {
//         const msg = await this.http.get<Message[]>(`${this.apiUrl}api/chats`).toPromise()
//         msg?.map(ms => this.messages.push(ms))
//     }
// }
