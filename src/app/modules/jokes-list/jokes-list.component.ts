import {Component, OnInit} from '@angular/core';
import {JokePublisherService} from "../../service/joke-publisher.service";
import {Joke} from "../../shared/model/joke";
import {SavedJokeService} from "../../service/saved-joke.service";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {

  jokesToBeReviewedArray!: Joke[];
  jokesAccepted!: Joke[];

  constructor(private jokePublisherService: JokePublisherService, private savedJokeService: SavedJokeService) {
    this.jokesToBeReviewedArray = [];
    this.jokesAccepted = savedJokeService.getJokes();
    this.jokesAccepted.forEach(value => console.log(value));
  }

  ngOnInit(): void {
    this.jokePublisherService.listenForJokes().subscribe(joke => {
      this.jokesToBeReviewedArray.push(joke);
    });
    // careful when resetting in case you lose data/jokes
    this.jokePublisherService.resetPublisher();
  }

  denyJoke(index: number) {
    this.jokesToBeReviewedArray.splice(index, 1);
  }

  acceptJoke(index: number) {
    this.savedJokeService.addJoke(this.jokesToBeReviewedArray[index]);
    this.jokesToBeReviewedArray.splice(index, 1);
  }
}
