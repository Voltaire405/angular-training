import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  private onValue: EventEmitter<string> = new EventEmitter<string>();

  enterkeyHandler(value: string) {
    this.onValue.emit(value);
  }

}
