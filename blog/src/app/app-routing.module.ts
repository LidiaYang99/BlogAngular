import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
