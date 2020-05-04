import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private service: UserService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let id = param['id'];
      if(!id) id=1;
      this.user = null;
      this.service.users.subscribe(user => {
        if (user.length == 0) return;

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500)

      });

    })
  }

}
