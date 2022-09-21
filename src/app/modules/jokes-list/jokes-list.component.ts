import {Component, OnInit} from '@angular/core';
import {JokePublisherService} from "../../service/joke-publisher.service";
import {Joke} from "../../shared/model/joke";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {

  jokesToBeReviewedArray!: Joke[];

  constructor(private jokePublisherService: JokePublisherService) {
    this.jokesToBeReviewedArray = [];
  }

  ngOnInit(): void {
    this.jokePublisherService.listenForJokes().subscribe(joke => {
      this.jokesToBeReviewedArray.push(joke);
    });
  }

}
