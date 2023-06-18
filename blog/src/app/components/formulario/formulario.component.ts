import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup

  timer: any | undefined



  // servicio
  postServicio = inject(PostService)

  constructor() {
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

  }

  // mostrar time en tiempo real
  ngOnInit() {

    setInterval(() => {
      this.timer = new Date();
    }, 1000)
  }



  onSubmit() {
    console.log(this.formulario.value);
    this.postServicio.creat(this.formulario.value)
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error)
  }









}

