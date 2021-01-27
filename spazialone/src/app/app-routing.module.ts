import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficiComponent } from './grafici/grafici.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  { path: 'search', component: PaginaComponent },
  { path: 'items/:id', component: GraficiComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
