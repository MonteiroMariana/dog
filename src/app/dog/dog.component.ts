import { Dog } from './../dog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
dog : Dog = {
              "message":"https://images.dog.ceo/breeds/bulldog-boston/n02096585_2177.jpg",
              "status": "true"
              } as Dog;

getName(): string[] {
  return this.dog.message.split("/")[4].split("-");
}
}
