import { Component } from '@angular/core';
import { LoginForm } from '../auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
form:LoginForm={
email:'',
password:''
}

submit(){
  const auth =  getAuth();
  createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential:any) => {
    const user = userCredential.user;
    console.log(user);
  });

  
  console.log(this.form);
}
}
