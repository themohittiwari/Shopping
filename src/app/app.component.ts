import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  previewValue = true;

  public listItems = [
    {
      id: 0,
      name: 'Books',
      purchased: false,
    },

    {
      id: 1,
      name: 'Pens',
      purchased: false,
    },
    {
      id: 2,
      name: 'T-shirt',
      purchased: false,
    },
    {
      id: 3,
      name: 'Groceries',
      purchased: false,
    },
    {
      id: 4,
      name: 'Shoes',
      purchased: false,
    },
    {
      id: 5,
      name: 'Vegetables',
      purchased: false,
    },
    {
      id: 6,
      name: 'Snacks',
      purchased: false,
    },
  ];
  public selectedItems = [];

  onToggle() {
    this.previewValue = !this.previewValue;
  }

  sendSelectedItems(data: any) {
    this.selectedItems = data;
  }

  getLeftItems(obj: any) {
    this.listItems = obj.remainingList;
    console.log(obj.remainingList);
    this.selectedItems = obj.remainingSelected;
  }
}
