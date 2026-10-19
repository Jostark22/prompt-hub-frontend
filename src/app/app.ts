import { Component } from '@angular/core'
import {PromptList} from './prompts/prompt-list/prompt-list';
import {NavBar} from "./nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [PromptList, NavBar]
})
export class App {}
