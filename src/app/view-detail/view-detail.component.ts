import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserData } from '../toggle-card-list-view/user-data';
import { UserService } from '../toggle-card-list-view/user.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  user$: Observable<UserData>;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { 
    this.route.paramMap.subscribe(params => {
      console.log('params', params.get('id'));
      
    })
  }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    );
  }

  goToUsers(user: UserData) {
    let userId = user? user.id : null;
    this.router.navigate(['/list-view']);
  }

}
