//Angular tools
import { Component } from '@angular/core';
// Model and Services
import { InformationUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { async } from '@angular/core/testing';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-mi-profile',
  templateUrl: './mi-profile.component.html',
  styleUrls: ['./mi-profile.component.scss']
})
export class MiProfileComponent {

  // Data User

  dataUser: InformationUser = {
    id: '',
    name: ''
  }

  user: InformationUser | null = null;

  constructor(private authService: AuthService, private userService: UserService) { }


  async onShowDetail(id: string) {
    try {
      const res = await this.userService.dataUser(id).toPromise()
      if (!res) throw new TypeError('res is undefined')
      //Product Date
      this.dataUser = res[0];
      console.log(res);
    }
    catch (error) {
      console.error(error);
    }

  }
}