import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Life Cycle Hooks';

  constructor(){
    console.log('constructor called');
  }
  // ngOnIn it(){
  //   console.log('ngOnInit called');
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called');
  //   console.log(changes);
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }
  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit called');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit called');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy called');
  // }

  userText: string = 'Angular';
}
