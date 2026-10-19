import { Component, signal } from '@angular/core'
import {Button} from 'primeng/button';

@Component({
  selector: 'app-nav-bar',
  imports: [Button],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  isDark= signal<boolean>(false);

  toggleDarkMode(){
    this.isDark.update(value => !value);
    console.log(this.isDark());
    document.documentElement.classList.toggle('app-dark', true);
  }
}


