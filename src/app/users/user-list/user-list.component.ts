import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;
  user: any;
  userName: any;
  userId: any;
  userNodeId: any;
  localUsers: any;
  id: any;
  firstName: any;
  lastName: any;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    // this.userService.getUsers().subscribe((rerurns: any) => {
    //   this.users = rerurns;
    // });

    this.userService.getLocalUsers().subscribe(data => {
      this.localUsers = data;
    });
  }

  // edit(user: any): void {
  //   this.userName = user.login;
  //   this.userId = user.id;
  //   this.userNodeId = user.node_id;

  // }


  localEdit(user: any): void {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;

  }

  localDeleteButton(user: any): void {
    // debugger
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;

    this.userService.deleteLocal(user.id).subscribe(data => {
      console.log(data);
    });
  }

  // save(user: any) {
  //   this.user = {};
  //   this.user.Id = this.userId;
  //   this.user.login = this.userName;
  //   this.user.node_id = this.userNodeId;

  //   this.userService.updateData(this.save, this.userName).subscribe(Data => {
  //     this.user = Data;
  //   });
  // }


  localUpdate() {

    var params = {
      id : this.id,
      firstName : this.firstName,
      lastName : this.lastName
    };
    
    this.userService.updateLocal(params).subscribe(data => {
      console.log(data);
      alert('Click here to update data!');
    });
  }


  localAdd() {

    var params = {
      id : this.id,
      firstName : this.firstName,
      lastName : this.lastName
    };

    this.userService.createLocal(params).subscribe(data => {
      console.log(data);
    });
  }


  localDelete() {

    var params = {
      id : this.id,
      firstName : this.firstName,
      lastName : this.lastName
    };

    this.userService.deleteLocal(params).subscribe(data => {
      console.log(data);
    });
  }


// ------------Didn't use------------



  updateTest() {
    // const newData = { id: id, firstName: 'jkjkjkjk', lastName: 'qqqqqq'};

    this.userService.updateLocal(this.localUpdate).subscribe(data => {
      this.id = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    })
  }
  

  deleteTest() {
    this.userService.deleteLocal(this.id).subscribe(data => {
      console.log(data);
    });
  }

  createTest() {
    const newData = { id: this.id, firstName: 'new added', lastName: 'new added' };

    this.userService.createLocal(newData).subscribe(data => {
      console.log(data);
    });
  }



// ------------Didn't use------------

}
