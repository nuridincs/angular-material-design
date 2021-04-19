import { Component, OnInit } from '@angular/core';
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
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login(): any {
    this.api.login(this.user.email, this.user.password).subscribe(result => {
      // this.router.navigate(['/admin']);
    }, error => {
      alert('Login Gagal');
    });
  }

}
