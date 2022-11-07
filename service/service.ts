import { HttpClient, HttpParams } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { SummonerByNameResponse } from '../interfaces/byname';
import { MatchInfo, Participant } from '../interfaces/match.info.interface';
import { LastMatchSummonerInfo } from '../interfaces/last.match.summoner.info.interface';
import { Kda } from '../interfaces/kda.interface';



@Injectable()
export class Service{


  private apiKey!:string;

  private summonersList: string[] = [];
  private lastMatchInfo: LastMatchSummonerInfo[]=[];
  private participants:Participant[]=[];
  public kda : Kda = {kills:0,deaths:0,assists:0, championName:'', win:false};
  private hayErrores :boolean=false;
  private httpParams: HttpParams = new HttpParams().set('api_key', JSON.parse(this.getApiKey()));

        endpoints = {
          byName: 'https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name',
          matches:'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/',
          lastMatch:'https://americas.api.riotgames.com/lol/match/v5/matches/'
        };

  constructor(private http: HttpClient){
    this.summonersList = JSON.parse(localStorage.getItem('historial')!) || [];
  }

    busqueda = {
    summonerName: 'L4D3d10s'
  };

  get historial():string[]{
    return [...this.summonersList];
  }

  get resultadoPartida():string{
    let resultado :string = '';
   if(this.kda.win){
    return resultado = 'VICTORIA';
   }else {
    return resultado = 'DERROTA';
   }

  }

  setApiKey(key:string){
    localStorage.setItem('apiKey',JSON.stringify(key));
  }

  getApiKey(){
    return localStorage.getItem('apiKey')! ;
    
    
  }
  get getErrores(){
    return this.hayErrores;
  }

  getErrorTrue(){
    return this.hayErrores = true;
  }

  buscarSummoner(summoner:string){

   console.log(JSON.parse(this.getApiKey()))

    let params = new HttpParams().set('api_key',JSON.parse(this.getApiKey()));
    this.summonersList.unshift(summoner);
    this.summonersList = this.summonersList.splice(0.10);
    localStorage.setItem('historial', JSON.stringify(this.summonersList));
     return this.http.get<SummonerByNameResponse>(`${this.endpoints.byName}/${summoner}`, {params});
  }

  buscarMatchesList(puuid:string){

    return this.http.get<string[]>(`${this.endpoints.matches}${puuid}/ids`, {params:this.httpParams})
  }

  buscarLastMatch(lastGameId:string, summoner:string){

    this.http.get<MatchInfo>(`${this.endpoints.lastMatch}${lastGameId}`, {params:this.httpParams})
      .subscribe(resp =>{
        this.participants = resp.info.participants;
        let respuesta = this.participants.filter(participant =>{
          return participant.summonerName === summoner;
        });
        this.lastMatchInfo = respuesta;
        Object.assign(this.kda, this.lastMatchInfo[0]);
      })
  }

  buscarLast10Matches(lastGameId:string){
   return  this.http.get<MatchInfo>(`${this.endpoints.lastMatch}${lastGameId}`,{params:this.httpParams})

  }

}
