import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from './auth.model';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    constructor(private authService: AuthService, private router: Router){

    }

    loginMode: boolean = true;

    onSubmit(authForm: NgForm){
        if(!authForm.valid){
            return;
        }

        const userAuthData: Auth = {
        email: authForm.value.email,
        password: authForm.value.password
        }

        let authenticateObs: Observable<AuthResponseData>;

        if(this.loginMode){
            authenticateObs = this.authService.login(userAuthData);
        }else{
            authenticateObs = this.authService.signUp(userAuthData);
        }

        authenticateObs.subscribe(resData => {
            console.log(resData);
            this.router.navigate(['/buy']);
        }, error => {
            console.log(error);
        });

        authForm.reset();

    }

    onSwitch(){
        this.loginMode = !this.loginMode;
    }
}