import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input1: string = "";
  input2: string = "";
  input3: string = "";
  input4: string = "";
  str = '';

  onEnter(type: string, event: any) {
    switch (type) {
      case "\\":
        this.input1 = event.target.value
        break
      case "@":
        this.input2 = event.target.value
        break
      case "#":
        this.input3 = event.target.value
        break
      case "$":
        this.input4 = event.target.value
        break
    }
  }

  onChange(event: any) {
    const input1 = document.getElementById('input1') as HTMLInputElement;
    const input2 = document.getElementById('input2') as HTMLInputElement;
    const input3 = document.getElementById('input3') as HTMLInputElement;
    const input4 = document.getElementById('input4') as HTMLInputElement;

    console.log(">>>>", event)
    let data = { type: '', value: '' };
    if (event.length) {
      for (let i = 0; i < event.length; i++) {
        console.log(">>>>", event[i])
        if (event[i] == "\\" || event[i] == "@" || event[i] == "#" || event[i] == "$") {
          data.value = "";
          switch (event[i]) {
            case "\\":
              data.type = 'firstName';
              input1.value = "";
              break
            case "@":
              data.type = 'lastName';
              input2.value = "";
              break
            case "#":
              data.type = 'chartNo';
              input3.value = "";
              break
            case "$":
              data.type = 'address1';
              input4.value = "";
              break
          }
        } else {
          data.value = data.value + event[i];
          switch (data.type) {
            case "firstName":
              input1.value = data.value;
              break
            case "lastName":
              input2.value = data.value;
              break
            case "chartNo":
              input3.value = data.value;
              break
            case "address1":
              input4.value = data.value;
              break
          }
        }
      }
    } else {
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
    }

  }
}
