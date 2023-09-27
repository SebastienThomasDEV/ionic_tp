import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NavPage} from "../nav/nav.page";
import {FeedService} from "../_services/feed.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, NavPage, HttpClientModule]
})
export class FeedPage implements OnInit {

  data: any;
  constructor(private readonly feedService: FeedService) { }

  ngOnInit() {
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      console.log('Async operation has ended');
      this.feedService.getFeed().subscribe((res) => {
        this.data = res;
      });
      console.log(this.data);
      event.target.complete();
    }, 2000);
  }

}
