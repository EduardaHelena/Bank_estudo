import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoBack() {
    this.router.navigate(['inicio'];
  }

}
