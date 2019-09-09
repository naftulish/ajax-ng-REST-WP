import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/ajax.service';

@Component({
  selector: 'artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {

  constructor(private ajax:AjaxService) { }

  ngOnInit() {
  }

}
