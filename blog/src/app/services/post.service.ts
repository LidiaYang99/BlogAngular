import { Injectable, inject } from '@angular/core';
import { Post } from '../interface/post.interfaces';

import { StorageService } from 'src/app/services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPost: Post[];
  private arrCategoria: string[]

  storageService = inject(StorageService)


  constructor(private localStorageService: StorageService) {
    this.arrPost = [{
      titulo: 'Welcome',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dicta, quasi optio repellendus modi nobis qui adipisci dolorum nihil? Sed alias fugit, dolore iure rerum neque maiores? Eaque, tempora totam.',
      autor: 'Maria',
      imagen: '/assets/image/img1.jpg',
      fecha: '16/06/2023',
      categoria: 'vida'
    },
    {
      titulo: 'Segundo post',
      contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dicta, quasi optio repellendus modi nobis qui adipisci dolorum nihil? Sed alias fugit, dolore iure rerum neque maiores? Eaque, tempora totam.',
      autor: 'Maria',
      imagen: '',
      fecha: '16/06/2023',
      categoria: 'Moda'
    }];


    this.arrCategoria = []
  }

  getAll() {

    if (this.storageService.getItem('datoGuardado')) {

      this.arrPost.push(this.storageService.getItem('datoGuardado'))
      return this.arrPost

    } else {
      return this.arrPost
    }

    // return this.arrPost

  }

  getCategoria() {

    for (let tipo of this.arrPost) {
      // 是数组里的每一个对象
      console.log(tipo);

      if (!this.arrCategoria.includes(tipo.categoria.toLowerCase())) {
        this.arrCategoria.push(tipo.categoria.toLowerCase())
        console.log(this.arrCategoria);
      }
    }

    return this.arrCategoria
  }

  getByCategoria(pCate: string) {
    return this.arrPost.filter(item => item.categoria.toLowerCase() === pCate)
  }


  creat(pPost: Post) {
    this.arrPost.push(pPost);
    console.log(this.arrPost);
  }



}
