import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnChanges{
  


  @Input() searchInput : string ='';



   
 @Input () products:Product [] =[] ;

 filteredProduct :Product []=[];

   ngOnChanges() { if
   (this.searchInput) {
   this.filteredProduct = this.products.filter(p => 
    p.brand.toLowerCase().includes(this.searchInput.toLowerCase()) ); 
  } else { this.filteredProduct = []; 

  }
 } 
 
}
