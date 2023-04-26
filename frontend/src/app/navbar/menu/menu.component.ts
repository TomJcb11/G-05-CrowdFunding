import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  ngAfterViewInit() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const profileButton = document.querySelector(".profile");
  
    if (dropdownMenu && profileButton) {
      dropdownMenu.addEventListener("click", (event) => {
        event.stopPropagation();
      });
  
      document.addEventListener("click", () => {
        dropdownMenu.classList.add("hidden-dropdown");
      });
  
      profileButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden-dropdown");
      });
  
      dropdownMenu.classList.add("hidden-dropdown");
    }
  }
  

}
