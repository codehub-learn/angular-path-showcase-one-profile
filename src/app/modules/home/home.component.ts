import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joke!: string;
  category!: string;

  constructor() {
    this.setInitialValues();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.setInitialValues();
  }

  private setInitialValues(){
    this.joke = "";
    this.category = "Misc";
  }
}
