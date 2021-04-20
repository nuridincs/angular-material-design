import { ApiService } from './../../services/api.service';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: any;
  book: any = {};
  books: any = [];
  loading: boolean;
  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'Products';
    this.getBooks();
  }

  getBooks(): void {
    this.loading = true;
    this.api.get('bookswithauth').subscribe(response => {
      this.books = response;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert('Something wrong');
    });
  }

  productDetail(data, idx): void {
    const dialog = this.dialog.open(ProductDetailComponent, {
      width: '400px',
      data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        if (idx === -1) {
          this.books.push(data);
        } else {
          this.books[idx] = data;
        }
      }
    });
  }

  deleteProduct(id, idx): void {
    const conf = confirm('Delete Item ?');
    if (conf) {
      this.loading = true;
      this.api.delete(`books/${id}`).subscribe(result => {
        this.books.splice(idx, 1);
        this.loading = false;
      }, error => {
        this.loading = false;
        alert('Something wrong');
      });
    }
  }

}
