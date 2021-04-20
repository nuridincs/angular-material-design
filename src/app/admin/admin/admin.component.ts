import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard'
    },
    {
      name: 'Product',
      icon: 'camera_enhance',
      url: '/admin/product'
    },
    {
      group: 'Menu Group',
      children: [
        {
          name: 'Image Gallery',
          icon: 'camera_enhance',
          url: '/admin/gallery'
        }
      ]
    }
  ];

  constructor(
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void {
    this.api.get('bookswithauth/status').subscribe(result => {
      return;
    }, error => {
      this.router.navigate(['/login']);
    });
  }

  logout(): void {
    const conf = confirm('Keluar aplikasi?');
    if (conf) {
      localStorage.removeItem('appToken');
      this.router.navigate(['/login']);
    }
  }

}
