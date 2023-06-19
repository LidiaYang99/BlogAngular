import { Component, inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interface/post.interfaces';


@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  // servicio
  postService = inject(PostService);

  arrPosts: Post[]
  arrCate: String[] | undefined

  timer: any | undefined

  constructor() {
    this.arrPosts = []
    this.arrCate = this.postService.getCategoria()

    this.timer = new Date();
  }

  ngOnInit() {
    
    this.arrPosts = this.postService.getAll()
    console.log(this.arrPosts);

    setInterval(() => {
      this.timer = new Date();
    }, 1000)

  }

  getContenido($event: any) {
    const value = $event.target.value.toLowerCase()
    console.log(value);


    if (value === 'todos') {
      this.arrPosts = this.postService.getAll()
    } else {
      this.arrPosts = this.postService.getByCategoria(value)
    }
  }
}
