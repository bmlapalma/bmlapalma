import { Component } from '@angular/core';

interface Image {
  path: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  // Lista estática de 5 imágenes numeradas
  images: Image[] = [
    { path: 'assets/img/gallery/1.jpg', alt: 'Imagen 1' },
    { path: 'assets/img/gallery/2.jpg', alt: 'Imagen 2' },
    { path: 'assets/img/gallery/3.jpg', alt: 'Imagen 3' },
    { path: 'assets/img/gallery/4.jpg', alt: 'Imagen 4' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 5' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 6' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 7' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 8' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 9' },
    { path: 'assets/img/gallery/5.jpg', alt: 'Imagen 10' },

  ];
}
