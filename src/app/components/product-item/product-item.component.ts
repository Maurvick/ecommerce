import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  pageId: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
