import { Component, inject } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/frontEnd/auth-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SidebarModule, ButtonModule,InputTextModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly _authService = inject(AuthServiceService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  async login(){
    if(this.loginForm.valid){
      try{
        const allowLogin = await this._authService.login(
          
          this.loginForm.value.email!,
          this.loginForm.value.password!,
        );
      }catch(error: any){
        console.log(error.status)
      }
    }
    
  }
}
