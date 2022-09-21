import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {Joke} from "../shared/model/joke";

@Injectable({
  providedIn: 'root'
})
export class JokePublisherService {

  private jokePublisher = new ReplaySubject<Joke>();

  constructor() { }

  listenForJokes() {
    return this.jokePublisher.asObservable()
  }

  publishJoke(joke: Joke){
    this.jokePublisher.next(joke);
  }
}
