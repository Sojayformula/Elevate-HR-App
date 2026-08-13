import { Component } from '@angular/core';

@Component({
  selector: 'app-others',
  imports: [],
  templateUrl: './others.html',
  styleUrl: './others.scss',
})
export class Others {

// move to next step //
  currentStep = 1;

nextStep() {
  if (this.currentStep < 3) {
    this.currentStep++;
  }
}


submitTarget() {
  // save target...

  this.nextStep();
}

submitSelfReview() {
  // save self review...

  this.nextStep();
}

submitManagerReview() {
  // save manager review...

  this.nextStep();
}

}
