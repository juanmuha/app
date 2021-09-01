import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  
  title = 'loginApp';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges en appcomponent");
    console.log(changes);
  }
}
