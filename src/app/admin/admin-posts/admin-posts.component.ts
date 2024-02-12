import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postservice : PostService) { }

  posts: Post[] = [];

  ngOnInit(): void {

    this.postservice.getAllPosts().subscribe(
      response =>{
       this.posts=response;
      }
    )

  }

}
