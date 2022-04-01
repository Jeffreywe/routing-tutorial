import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-tutorial';

  constructor(private usrsvc:UserService) {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
