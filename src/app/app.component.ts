import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorsApp';

  constructor(private _userService: UserService) {
    this._userService.getUsers().subscribe(
      res => console.log(res),
      error => console.log('Error on AppComponent: ', error)
    )
  }


}
