
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-container',
  imports: [RouterOutlet, NavComponent, HeaderComponent],
  templateUrl:'./container.component.html',
  styleUrls : ['./container.component.css']
})
export class ContainerComponent {
  title = 'AngularBasics';
}