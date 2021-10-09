import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  /** navigate to the check out  */
  private navigateToCheckOut(data: string): void {
    document.getElementById(data)?.scrollIntoView();
  }

  constructor(private navigateToCheckout: NavigationService) { }

  ngOnInit(): void {
    this.navigateToCheckout?.moveToCheckout().subscribe((product) =>
      this.navigateToCheckOut(product))
  }

}

