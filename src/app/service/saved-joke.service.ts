import { Injectable } from '@angular/core';
import {Joke} from "../shared/model/joke";

@Injectable({
  providedIn: 'root'
})
export class SavedJokeService {

  private savedJokesArray!: Joke[];

  constructor() {
    let savedJokesArrayAsJSON = localStorage.getItem("savedJokesArray");
    if (savedJokesArrayAsJSON != null) {
      // convert parsed objects to Joke class
      this.savedJokesArray = JSON.parse(savedJokesArrayAsJSON);
    } else {
      this.savedJokesArray =  [];
    }
  }

  addJoke(joke: Joke){
    this.savedJokesArray.push(joke);
    let savedJokesArrayAsJSON = JSON.stringify(this.savedJokesArray);
    localStorage.setItem("savedJokesArray", savedJokesArrayAsJSON);
  }

  getJokes(): Joke[]{
    return this.savedJokesArray;
  }
}
