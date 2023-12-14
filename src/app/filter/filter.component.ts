import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges {
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() chartNo: string = "";
  @Input() address1: string = "";
  @Output() emitOutput: EventEmitter<any> = new EventEmitter<any>();
  combinedInput: string = "";

  ngOnChanges(): void {
    this.combinedInput = "";
    if (this.firstName) {
      this.combinedInput = this.combinedInput + '\\' + this.firstName;
    }
    if (this.lastName) {
      this.combinedInput = this.combinedInput + '@' + this.lastName;
    }
    if (this.chartNo) {
      this.combinedInput = this.combinedInput + '#' + this.chartNo;
    }
    if (this.address1) {
      this.combinedInput = this.combinedInput + '$' + this.address1;
    }
  }

  onInputText(event: any) {
    let value = event.target.value;
    this.emitOutput.next(value)
  }

  onClear() {
    this.combinedInput = "";
    this.emitOutput.next(this.combinedInput)
  }
}
