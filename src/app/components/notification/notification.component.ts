import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  
  editor: Editor =  new Editor();
  html = '';
  constructor(private route:Router) { }

  ngOnInit(): void {
  
    
    this.editor = new Editor();
  }

}
