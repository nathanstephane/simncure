import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user:any;
  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void{
    this.dataService.getUser().subscribe((res: any) => {
      console.log(res);
      //console.log(res.results[0].gender);
      this.user=res.results[0];
    });
  }
}
