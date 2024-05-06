import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void{
    this.dataService.getUsers().subscribe((res: any) => {
      res.results.forEach( (rslt: any) => {
        this.users.push(rslt);
      })
      
      console.log(this.users);
    });
  }
}
