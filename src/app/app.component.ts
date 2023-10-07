import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpClient:HttpClient){
  }

  ngOnInit(): void {

    //let httpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + 'user5@gmail.com' + ':' + '1111');
    // let credentials = window.btoa('user@gmail.com' + ':' + '123');
    // let httpHeaders = new HttpHeaders().set('Authorization', 'Basic ' + credentials);


    //httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));


    // this._httpClient.get<any>("http://localhost:8080/api/user", { observe: 'response',withCredentials: true, headers:httpHeaders }).subscribe(v => {
    //   console.log("Resultat" , v)
    // });

    this._httpClient.get<any>("http://localhost:8080/api/user", { observe: 'response',withCredentials: true}).subscribe(v => {
      console.log("Resultat" , v)
    });

    // setTimeout(()=> {
    //   this._httpClient.get<any>("http://localhost:8080/api/drivers", { observe: 'response',withCredentials: true}).subscribe(v => {
    //     console.log("Drivers" , v)
    //   });
    // }, 5000)


  /*  this._httpClient.get<any>("http://localhost:8080/api/user", { observe: 'response',withCredentials: true, headers:httpHeaders }).subscribe(v => {
      console.log("Resultat" , v)
    });*/

  }

}
