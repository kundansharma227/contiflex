import { Component, OnInit, TemplateRef,ViewEncapsulation } from '@angular/core';
import { NgbDropdownToggle, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule, WavesModule, ButtonsModule, DropdownModule } from 'angular-bootstrap-md'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private offcanvasService: NgbOffcanvas    ) {}
 
  ngOnInit(): void {
  }
  openScroll(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { scroll: true });
  }

  openForm() {
    
    // document.getElementById("myForm").style.display="block";
    // document.getElementById('myForm').style.display = "block";
  }
  
  closeForm() {
    // document.getElementById("myForm").style.display = "none";
  }
  
  // const toggleButton = document.getElementsByClassName('toggleButton')[0]
  // const navbarLinks = document.getElementsByClassName('navbarLinks')[0]
  
  // toggleButton.addEventListener('click',()=>{
  //   navbarLinks.classList.toggle('active')
  // } )
}
