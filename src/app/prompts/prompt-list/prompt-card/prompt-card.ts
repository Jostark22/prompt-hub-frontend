import {Component, input} from '@angular/core'
import {Prompt} from '../../prompt.model';
import { Card } from 'primeng/card'
import { Button } from 'primeng/button'
import { Textarea } from 'primeng/textarea'
@Component({
  selector: 'app-prompt-card',
  imports: [Card, Button, Textarea],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt = input.required<Prompt>()
}
