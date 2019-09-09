import { Component } from '@angular/core';
import { AjaxService } from './ajax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ajax:AjaxService) { }

  title = 'my-app';

  search_post(val){
    this.ajax.post_title_text = '';
    this.ajax.post_content_text = '';
    
    this.ajax.post_search(val).subscribe(_e => {
       this.ajax.post_content(_e[0].id).subscribe(_h => {
         this.ajax.post_title_text = _h.title.rendered;
         this.ajax.post_content_text = _h.content.rendered;
      })
    });
    this.ajax.is_home = false;
  }
}
