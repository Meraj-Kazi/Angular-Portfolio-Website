import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
user : any;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //grab the username out of url 
    this.route.params.subscribe(params => {
      const username = params['username'];

          // use the userservice to get data from github api
        this.userService.getUser(username)
        .subscribe(user =>  this.user = user);
    });
  }

}
