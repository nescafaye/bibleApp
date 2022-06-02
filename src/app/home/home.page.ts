import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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
  
//   getData() {
//     this.apiService.getGospel().subscribe(data => { 
//       console.log(data); 
//       this.gospel = data;

//   })
// }

  // apiUrl: string = 'http://localhost/bible_app/php/displayList.php';

  // fetchData() {
  //   this.http.get(this.apiUrl).subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

// getGospel() {
//   this._apiService.getGospel().subscribe((res:any) => {
// console.log("SUCCESS ====", res);
// }, (error: any) => {
//     console.log("ERROR ====", error);
//     })
// }

}

}
