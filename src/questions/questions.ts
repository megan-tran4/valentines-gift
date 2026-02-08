import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {

    envelope_opened = false;
    letter_opened = false;
    questions_done = false;

    toggleLetter() {
        if (!this.envelope_opened) {
            this.envelope_opened = true;
        } else if (this.letter_opened) {
            this.letter_opened = false;
            this.envelope_opened = false;
        } else {
            this.letter_opened = true;
        }

    }

    changeQuestion() {
        this.questions_done = true;
    }

    togglePopUp() {
        alert("Hey! That's not very nice :(")
    }
    
    
  
}
