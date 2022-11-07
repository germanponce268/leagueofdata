import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Busqueda } from 'src/app/interfaces/buscador.interface';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  onEnter : EventEmitter<string> = new EventEmitter<string>();
  public checked : boolean = false;
  constructor(private service:Service, private router:Router) { }

  ngOnInit(): void {
  }

  buscar(event:any){
   console.log(event.target.value)
   this.service.buscarSummoner(event.target.value)
    .pipe(
      switchMap(resp=>this.service.buscarMatchesList(resp.puuid))   
      ).subscribe(data=>{
        this.service.buscarLastMatch(data[0], event.target.value)
      })
      this.router.navigate(['/resultado']);
  }

  switchToKey(event:any){
    console.log(event.checked);
    if(event.checked){
      console.log('is checked');
      this.checked = true;
    }
  }

  sendKey(event:any){
    this.service.setApiKey(event.target.value);
    console.log();
  }
}
