import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css'
})
export class ChildtoparentComponent {

childItem : string ='';

   @Output() childEvent = new EventEmitter<string>;

   addChildItem() {
    this.childEvent.emit(this.childItem );
    this.childItem = '';
   }
}
