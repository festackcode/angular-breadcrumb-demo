import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-card-list',
  templateUrl: './toggle-card-list.component.html',
  styleUrls: ['./toggle-card-list.component.css']
})
export class ToggleCardListViewComponent implements OnInit {
  
  checked: boolean = false;
  isCard: boolean = false;
  
  data: Array<any> = [
    {
      id: 1,
      name: 'John Doe',
      dob: '24-10-1980',
      nationality: 'United States',
      highestQualification: 'Masters in Science',
      jobDescription: 'Sr Technical Manager'
    },
    {
      id: 2,
      name: 'John Doe',
      dob: '01-01-1980',
      nationality: 'Belgian',
      highestQualification: 'Masters in Science',
      jobDescription: 'Sr Developer'
    },
    {
      id: 3,
      name: 'John Doe',
      dob: '01-01-1970',
      nationality: 'Canadian',
      highestQualification: 'Masters in Science',
      jobDescription: 'Testing Manager'
    }
  ];

  ngOnInit() {
    
  }
  
  handleChange(event) {
    this.isCard = event.checked;
    console.log('');
  }
    

}