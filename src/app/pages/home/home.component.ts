import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/ajax.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ajax:AjaxService) { }


  ngOnInit() {
    this.ajax.post().subscribe(_e => {this.ajax.posts = _e});
  }

  get_pos_content(id:string){
    this.ajax.post_title_text = '';
    this.ajax.post_content_text = '';
    
    this.ajax.post_content(id).subscribe(_e => {
      this.ajax.post_title_text = _e.title.rendered; 
      this.ajax.post_content_text = _e.content.rendered; 
    });
    this.ajax.is_home = false;
  }
}
