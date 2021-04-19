import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
