import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Post } from 'src/app/interface/post.interfaces';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup
  timer: any | undefined

  newPost: Post


  // servicio
  postServicio = inject(PostService)

  constructor(private router: Router, private localStorageService: StorageService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required,
        Validators.maxLength(25),
      ]),

      contenido: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500),
      ]),

      autor: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),

      fecha: new FormControl(null, [
        Validators.required
      ]),

      imagen: new FormControl(),

      categoria: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),
    })

    this.timer = new Date();

    this.newPost = {
      titulo: '',
      contenido: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: '',
    }

  }

  // mostrar time en tiempo real
  ngOnInit() {

    setInterval(() => {
      this.timer = new Date();
    }, 1000)

  }


  onSubmit() {
    console.log(this.formulario.value);

    this.newPost = this.formulario.value
    this.postServicio.creat(this.newPost);
  
    const dato = this.newPost;
    this.localStorageService.setItem('datoGuardado', dato);
    
    this.router.navigate(['/posts']);
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error)
  }



}

