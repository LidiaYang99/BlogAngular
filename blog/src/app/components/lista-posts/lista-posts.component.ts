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

  constructor() {
    this.arrPosts = []
  }

  ngOnInit() {
    this.arrPosts = this.postService.getAll()
    console.log(this.arrPosts);
    
  }

}
