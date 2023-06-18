import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPost: Post[]

  constructor() {
    this.arrPost = [{
      titulo: 'primer blog',
      texto: 'xxxxxxxxxxxxx',
      autor: 'Maria',
      imagen: 'xxx',
      fecha: '16/06/2023',
      categoria: 'vida'
    }]
  }

  getAll() {
    return this.arrPost
  }

  getByCategoria(pCate: string) {
    return this.arrPost.filter(item => item.categoria === pCate)
  }

  creat(pPost: Post) {
    this.arrPost.push(pPost);
    console.log(this.arrPost);
  }

}
