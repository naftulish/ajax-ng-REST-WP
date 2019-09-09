import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private link = 'https://angular-ajax.000webhostapp.com/wp-json/wp/v2/';

  constructor(private http:HttpClient) { }
  
  is_home = true;
  
  posts:[] = [];

  post_title_text:any;
  post_content_text:any;

  public post():Observable<any>{
    return this.http.get(this.link + 'posts');
  }

  public post_content(post_id:string):Observable<any>{
    return this.http.get(this.link + 'posts/' + post_id);
  }

  public post_search(string_search:string):Observable<any>{
    return this.http.get(this.link + 'search/?search=' + string_search);
  }
}
