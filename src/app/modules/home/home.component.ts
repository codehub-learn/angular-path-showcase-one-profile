import {Component, OnInit} from '@angular/core';
import {JokePublisherService} from "../../service/joke-publisher.service";
import {Joke} from "../../shared/model/joke";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joke!: string;
  category!: string;

  constructor(private jokePublisherService: JokePublisherService) {
    this.setInitialValues();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.jokePublisherService.publishJoke(new Joke(this.joke, this.category, "ADMIN"));
    this.setInitialValues();
  }

  private setInitialValues(){
    this.joke = "";
    this.category = "Misc";
  }
}
