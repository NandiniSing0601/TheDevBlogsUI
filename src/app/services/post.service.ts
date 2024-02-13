import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/update-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {}
  
   apiBaseUrl = environment.apiBaseUrl;

    getAllPosts() : Observable<Post[]>
    {
       return this.http.get<Post[]>(this.apiBaseUrl+'/api/Posts/get-all-blogs');
    }

    getPostById(id : string) : Observable<Post> {
      return this.http.get<Post>(this.apiBaseUrl+'/api/Posts/'+ id);
    }

    updatePostById(id : string | undefined , updatePostRequest : UpdatePostRequest) : Observable<Post> {
      return this.http.put<Post>(this.apiBaseUrl+'/api/Posts/'+ id ,updatePostRequest );
    }
}
