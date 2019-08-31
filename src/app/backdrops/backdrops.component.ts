import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrops',
  templateUrl: './backdrops.component.html',
  styleUrls: ['./backdrops.component.scss']
})
export class BackdropsComponent implements OnInit {
  isLoading: boolean;
  backdrops: number[];

  constructor() {
    this.isLoading = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.backdrops = [...new Array(20).keys()];
      this.isLoading = false;
    }, 2000);
  }
}
