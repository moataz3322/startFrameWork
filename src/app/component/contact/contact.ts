import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // inputText: string = '';

  // checkInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   this.inputText = input.value;
  // }

  //   inputText: string = '';

  //   checkInput(event: Event): void {
  //     const input = event.target as HTMLInputElement;
  //     this.inputText = input.value;
  //   }

  //   inputs: string[] = ['UserName', 'UserAge', 'UserEmail', 'UserPass'];

  //   checkWho(event: Event): void {}
  //   focusedField: string = '';

  //   setFocused(field: string): void {
  //     this.focusedField = field;
  //     console.log('الـ input اللي عليه التركيز هو:', field);
  //   }

  // inputs: string[] = ['UserName', 'UserAge', 'UserEmail', 'UserPass'];
  // inputTexst: string[] = this.inputs.map(() => '');
  // focused: string = '';

  // checkInput(event: Event, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   this.inputTexst[index] = input.value;
  // }

  // setFocused(index: number): void {
  //   this.focused = this.inputs[index];
  //   console.log(this.focused);
  // }

  inputs: string[] = ['UserName', 'UserAge', 'UserEmail', 'UserPass'];

  inputText: string[] = this.inputs.map(() => '');

  focused: string = '';

  setFocused(index: number): void {
    this.focused = this.inputs[index];
  }
}
