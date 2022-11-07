import { Component, OnInit } from '@angular/core';
import { Kda } from 'src/app/interfaces/kda.interface';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  public resultados:Kda[] = [];
  public servicio:Service;
  public resultadoPartida: string = 'victoria';
  public resultadoMap: any = {'victoria': 'Victoria', 'derrota':'Derrota'}

  constructor(private service:Service) {

    this.servicio = this.service;

   }

  ngOnInit(): void {
  this.resultados.push(this.service.kda) ;
  }

}
