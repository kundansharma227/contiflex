import { Component, OnInit, TemplateRef,ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [];
    constructor(private offcanvasService: NgbOffcanvas, config: NgbCarouselConfig) {  
      config.interval = 2000;  
      config.wrap = true;  
      config.keyboard = false;  
      config.pauseOnHover = false;  
    } 
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    openScroll(content: TemplateRef<any>) {
      this.offcanvasService.open(content, { scroll: true });
    }
    
  }
