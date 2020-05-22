import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from '../../user-data';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { slideInAnimation } from '../../../animation';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  animations: [ slideInAnimation ]
})
export class ListViewComponent implements OnInit {

// @Input() data: Array<any> = [];

users$: Observable<UserData[]>;
selectedId: number;
// data: Array<any> = [
//   {
//     id: 1,
//     name: 'John Doe',
//     dob: '24-10-1980',
//     nationality: 'United States',
//     highestQualification: 'Masters in Science',
//     jobDescription: 'Sr Technical Manager'
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     dob: '01-01-1980',
//     nationality: 'Belgian',
//     highestQualification: 'Masters in Science',
//     jobDescription: 'Sr Developer'
//   },
//   {
//     id: 3,
//     name: 'John Doe',
//     dob: '01-01-1970',
//     nationality: 'Canadian',
//     highestQualification: 'Masters in Science',
//     jobDescription: 'Testing Manager'
//   }
// ];

  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.router.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.userService.getUsers();
      })
    );
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}