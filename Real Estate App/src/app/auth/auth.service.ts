import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from './auth.model';
import { User } from './user.model';


export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    user = new BehaviorSubject<User>(null);

    constructor(private Http: HttpClient){

    }

    login(authData: Auth){
        return this.Http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDp1BKI0mY38RX5LqrdKyZkH3lA3sBnjrc', 
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }).pipe(tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }

    signUp(authData: Auth){
        return this.Http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDp1BKI0mY38RX5LqrdKyZkH3lA3sBnjrc', 
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }).pipe(tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }

    logout(){
        this.user.next(null);
    }

    private handleAuthentication(email: string, localId: string, idToken: string, expDate: number){
        const expirationDate = new Date(new Date().getTime() + expDate * 1000);
        const user = new User(email, localId, idToken, expirationDate);
        this.user.next(user);
    }
    
}