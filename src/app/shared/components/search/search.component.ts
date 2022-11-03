import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() filterPost = '';

  constructor() { }

  ngOnInit(): void {
  }

}
