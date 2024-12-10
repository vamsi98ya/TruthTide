import { Component } from '@angular/core';
import { newsposts } from 'src/app/shared/models/newsposts';
import { NewspostsService } from 'src/app/shared/services/newsposts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  newsposts: newsposts[] = [];

  constructor(private dataService: NewspostsService) {

  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.newsposts = data as newsposts[];
    });
  }

  TrueBtnClick(i: number) {
    if(this.newsposts[i].True != 100 && this.newsposts[i].Fake != 0){
    this.newsposts[i].True = this.newsposts[i].True + 1;
    this.newsposts[i].Fake = this.newsposts[i].Fake - 1;
    }
  }

  FakeBtnClick(i: number) {
    if(this.newsposts[i].Fake != 100 && this.newsposts[i].True != 0){
    this.newsposts[i].Fake = this.newsposts[i].Fake + 1;
    this.newsposts[i].True = this.newsposts[i].True - 1;
    }
  }

  NewsBtnClick(i: number) {
    if(this.newsposts[i].News != 100 && this.newsposts[i].NotNews != 0){
    this.newsposts[i].News = this.newsposts[i].News + 1;
    this.newsposts[i].NotNews = this.newsposts[i].NotNews - 1;
    }
  }

  NotNewsBtnClick(i: number) {
    if(this.newsposts[i].NotNews != 100 && this.newsposts[i].News != 0){
    this.newsposts[i].NotNews = this.newsposts[i].NotNews + 1;
    this.newsposts[i].News = this.newsposts[i].News - 1;
    }
  }
}
