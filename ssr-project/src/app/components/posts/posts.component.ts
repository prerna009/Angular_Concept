import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../../services/api-handler.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  apiData: any;

  constructor(private apiServices: ApiHandlerService){}

  ngOnInit(): void {
    this.apiServices.fetchDataFromAPI().subscribe(data => {
      this.apiData = data;
    });

    console.log('posts');
  }

}
