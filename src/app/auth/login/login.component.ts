import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  user: any = {};
  constructor(
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): any {
    this.api.login(this.user.email, this.user.password).subscribe(result => {
      localStorage.setItem('appToken', JSON.stringify(result));
      this.router.navigate(['/admin']);
    }, error => {
      alert('Login Gagal');
    });
  }

}
