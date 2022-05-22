import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  date: Date;

  constructor() {
    this.date = new Date;
   }

  ngOnInit(): void {
  }

}
