import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {

    envelope_opened = false;
    letter_opened = false;

    openEnvelope() {
        this.envelope_opened = true;
        console.log('Envelope opened:', this.envelope_opened);
    }
    openLetter() {
        this.letter_opened = !this.letter_opened;
        this.envelope_opened = false;
        console.log('Letter opened:', this.letter_opened);
    }
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
  
}
