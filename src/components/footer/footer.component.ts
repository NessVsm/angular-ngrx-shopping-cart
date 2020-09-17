import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
  public cart: any[];

   ngOnInit() {}
}