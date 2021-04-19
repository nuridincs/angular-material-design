import { MaterialDesign } from './../material/material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent, GalleryComponent, ImageUploaderComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
