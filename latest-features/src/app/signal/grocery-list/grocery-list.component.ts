import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent {
  items = [
    { name: 'Apples', quantity: 5, lastEditedBy: '' },
    { name: 'Bananas', quantity: 3, lastEditedBy: '' },
    { name: 'Milk', quantity: 1, lastEditedBy: '' },
  ];

  itemList = signal(this.items);

  currentUser = signal('Prerna');
  newItemName: string = '';
  newItemQuantity: number = 0;

  addItem(){
    if(this.newItemName && this.newItemQuantity > 0){
      this.itemList.set([
        ...this.itemList(),
        { name: this.newItemName, quantity: this.newItemQuantity, lastEditedBy: this.currentUser() }
      ]);
      this.newItemName = '';
      this.newItemQuantity = 0;
    } else{
      console.log('Please provide valid item and quantity');
    }
  }

  removeItem(item:any){
    this.itemList.set(this.itemList().filter((i)=>i.name!==item.name || i.quantity!==item.quantity));
  }
}
