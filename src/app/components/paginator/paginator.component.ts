import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input()
  pageSizeOptions: any[];

  @Input()
  config: any;

  constructor(private router: Router) {}

  pageChange(newPage: number) {
    this.router.navigate(['/page/', newPage]);
  }

  changePageItemCount(selectedItem) {
    localStorage.setItem('pageSize', selectedItem.value);
    this.config.itemsPerPage = selectedItem.value;
  }

  ngOnInit(): void {}
}
