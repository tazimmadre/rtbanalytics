import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
    this.loadJsFile("/assets/main.js"); 
    this.loadJsFile("/assets/particles.js");  
    this.loadJsFile("/assets/app.js");
    this.loadJsFile("/assets/cookie.js");  
    this.loadJsFile("https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js") ;
    this.loadJsFile("https://unpkg.com/aos@2.3.1/dist/aos.js");
    this.loadJsFile("https://code.jquery.com/jquery-3.2.1.slim.min.js");
    this.loadJsFile("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
    this.loadJsFile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js");
    this.loadJsFile("https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.css");
    this.loadJsFile("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
  }  
  public loadJsFile(url:any) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  } 

}
