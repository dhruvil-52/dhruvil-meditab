import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges {
  @Input() input1: string = "";
  @Input() input2: string = "";
  @Input() input3: string = "";
  @Input() input4: string = "";
  @Output() emitOutput: EventEmitter<any> = new EventEmitter<any>();
  combinedInput: string = "";

  ngOnChanges(): void {
    this.combinedInput = "";
    if (this.input1) {
      this.combinedInput = this.combinedInput + '\\' + this.input1;
    }
    if (this.input2) {
      this.combinedInput = this.combinedInput + '@' + this.input2;
    }
    if (this.input3) {
      this.combinedInput = this.combinedInput + '#' + this.input3;
    }
    if (this.input4) {
      this.combinedInput = this.combinedInput + '$' + this.input4;
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
