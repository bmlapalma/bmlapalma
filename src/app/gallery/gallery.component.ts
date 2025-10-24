import { Component } from '@angular/core';

interface Image {
  path: string;
  alt?: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  /**
   * Array of images to display in the gallery.
   *
   * Replace the paths with your own images located in `src/assets/img/gallery`.
   */
  images: Image[] = [
    { path: 'assets/img/gallery/photo1.jpg', alt: 'Foto de actuación 1' },
    { path: 'assets/img/gallery/photo2.jpg', alt: 'Foto de actuación 2' },
    { path: 'assets/img/gallery/photo3.jpg', alt: 'Foto de actuación 3' }
    // Añade más objetos con `path` y `alt` para mostrar más imágenes.
  ];
}