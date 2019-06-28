import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'environments/environment';
import { SettingsService } from 'app/services/settings.service'
import { User } from 'app/models/user.model';

import {BehaviorSubject, Observable, zip} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  users: User[];


  constructor(public service: SettingsService,
    ) {
  }

  ngOnInit() {
    console.log('Variables de entorno',environment)
    this.service.favorities = new BehaviorSubject([]);
  }
}
