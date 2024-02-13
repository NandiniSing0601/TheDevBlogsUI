import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-posts',
  templateUrl: './admin-view-posts.component.html',
  styleUrls: ['./admin-view-posts.component.scss']
})
export class AdminViewPostsComponent implements OnInit {

  constructor(private route : ActivatedRoute , private postService : PostService) {}
  
  post : Post | undefined ;

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id)
        {
            this.postService.getPostById(id).subscribe(
              response => {
               this.post=response;
              }
            );
        }
      }
     );
  }

  OnSubmit() : void{

    const updatePostREquest : UpdatePostRequest = {
      title:this.post?.title,
      content:this.post?.content,
      summary:this.post?.summary,
      author:this.post?.author,
      urlHandle:this.post?.urlHandle,
      featuredImageUrl:this.post?.featuredImageUrl,
      publishedDate:this.post?.publishedDate,
      updatedDate:this.post?.updatedDate,
      visible:this.post?.visible,
    }
    
    this.postService.updatePostById(this.post?.id,updatePostREquest).subscribe(
      (response) => {
        console.log('Update successful:', response);
        alert('Successful');
      },
      (error) => {
        console.error('Error occurred:', error);
    
        // Log the detailed error information
        if (error instanceof HttpErrorResponse) {
          console.log('Error details:', error.error);
        }
    
        alert('An error occurred while updating the post.');
      }
    );
    

  }
}
