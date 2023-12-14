import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstName: string = "";
  lastName: string = "";
  chartNo: string = "";
  address1: string = "";
  str = '';

  onEnter(type: string, event: any) {
    switch (type) {
      case "\\":
        this.firstName = event.target.value
        break
      case "@":
        this.lastName = event.target.value
        break
      case "#":
        this.chartNo = event.target.value
        break
      case "$":
        this.address1 = event.target.value
        break
    }
  }

  onChange(event: any) {
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    const chartNo = document.getElementById('chartNo') as HTMLInputElement;
    const address1 = document.getElementById('address1') as HTMLInputElement;

    firstName.value = "";
    lastName.value = "";
    chartNo.value = "";
    address1.value = "";
    let data = { type: '', value: '' };
    for (let i = 0; i < event.length; i++) {
      if (event[i] == "\\" || event[i] == "@" || event[i] == "#" || event[i] == "$") {
        data.value = "";
        data.type = event[i];
      } else {
        data.value = data.value + event[i];
        switch (data.type) {
          case "\\":
            firstName.value = data.value;
            break
          case "@":
            lastName.value = data.value;
            break
          case "#":
            chartNo.value = data.value;
            break
          case "$":
            address1.value = data.value;
            break
        }
      }
    }
  }
}
