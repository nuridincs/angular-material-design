import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  user: any = {};
  hide: boolean;
  loading: boolean;
  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.hide = true;
  }

  register(): any {
    console.log('user', this.user);
    this.loading = true;
    this.api.register(this.user.email, this.user.password).subscribe(result => {
      this.loading = false;
      // this.router.navigate(['/login']);
    }, error => {
      this.loading = false;
      alert('Something went wrong');
    });
  }

}
