import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  cards = [
    {
      name: 'name1',
      id: 1
    },
    {
      name: 'name2',
      id: 2
    },
  ]

  imageUrl: 'https:image'


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('hey dude')
  }
}
