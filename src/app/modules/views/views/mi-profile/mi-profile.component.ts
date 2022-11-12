//Angular tools
import { Component } from '@angular/core';
<<<<<<< Updated upstream
=======
// Model and Services
import { InformationUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Profile } from '../../models/profile';
>>>>>>> Stashed changes

@Component({
  selector: 'app-mi-profile',
  templateUrl: './mi-profile.component.html',
  styleUrls: ['./mi-profile.component.scss']
})
export class MiProfileComponent {

<<<<<<< Updated upstream
  constructor() { }

}
=======
  // Data User
  user: Profile | null = null;
  token = ''


  constructor(

    private authService: AuthService,
    // private userService: UserService

  ) { }

  // Get user profile (id)
  ngOnInit(): void {
    this.authService.getProfile()
      .subscribe(data => {
        this.user = data;
      })
  }
}
>>>>>>> Stashed changes
