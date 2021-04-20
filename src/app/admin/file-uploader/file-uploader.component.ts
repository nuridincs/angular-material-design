import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  selectedFile: any;
  loadingUpload: boolean;
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<FileUploaderComponent>
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadFile(): void {
    const input = new FormData();
    input.append('file', this.selectedFile);
    this.loadingUpload = true;
    this.api.upload(input).subscribe(result => {
      this.updateProduct(result);
    }, error => {
      this.loadingUpload = false;
      alert('Upload Gagal');
    });
  }

  updateProduct(data): void {
    if (data.status) {
      this.loadingUpload = false;
      alert('File Berhasil diupload');
      this.dialogRef.close();
    } else {
      alert(data.message);
    }
  }

}
