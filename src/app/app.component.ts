import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private route: Router) {
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("ATS");
    this.route.navigateByUrl('Home');

  }

}
