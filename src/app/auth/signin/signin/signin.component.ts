import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { JwtService } from 'src/app/service/jwt-service.service';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public routes = routes;
  loginForm!: FormGroup;
  constructor(private router: Router , private fb:FormBuilder , private jwtservice : JwtService){}


ngOnInit(): void{
  this.loginForm = this.fb.group({
    email:['',Validators.required ],
    password:['',Validators.required]
  })
}

submitForm() {
  console.log()
  
  this.jwtservice.login(this.loginForm.value).subscribe(
    (response) => { // Utilisation explicite
      console.log(response);
      if (response != null) {
      
        const jwtToken = response;
        
        localStorage.setItem('jwt', jwtToken);
        localStorage.setItem('userEmail',this.loginForm.getRawValue().email)
        this.router.navigate([routes.adminDashboard]);
      }
    },
    (error) => {
      console.error('Erreur lors de la connexion :', error);
    }
  );
}
  navigation() {
    this.router.navigate([routes.adminDashboard])
  }
  public password : boolean[] = [false];

  public togglePassword(index: number){
    this.password[index] = !this.password[index]
  }
}
