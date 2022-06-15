import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public searchTerm: string;

  public gospel:any = [];

  constructor(

  public apiService: ApiService
  // private http: HttpClient
  ) {}

  ngOnInit() {
    this.apiService.getGospel().subscribe(data => { 
      console.log(data); 
      this.gospel = data;
  })

}

}
