import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

}



export class SlideExample {
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor() {}
}
