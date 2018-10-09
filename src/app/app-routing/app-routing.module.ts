import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroClientesComponent} from './../cadastro-clientes/cadastro-clientes.component'

import { ContentComponent } from './../content/content.component';
const routes: Routes = [
  { path: 'inicio', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {
}
