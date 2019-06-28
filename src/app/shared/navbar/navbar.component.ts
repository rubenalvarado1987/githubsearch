import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from 'app/services/settings.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  //txtInput: string = "rubenalvarado1987";
  txtInput: string = "rubenalvarado1987";
  
  users: User[];

  constructor(
    private service : SettingsService
  ) {}

  ngOnInit() {
    this.search();
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
  search(){

    console.log("Texto buscado: ",this.txtInput);
    //this.notaryService.getNotaries().subscribe(data => {

    this.service.getUserByName(this.txtInput).subscribe(data => {

      console.log("Respuesta del API:",data)

      if (data){
        this.service.avatar_url = data.avatar_url;
        this.service.name = data.name;
        this.service.following = data.fallowing;
        this.service.bio = data.bio; 

        this.service.getRepos(this.txtInput).subscribe(data => {

          console.log("Repositorios:",data)
          this.service.repos = data;
  
        })
      }

      


      
    })


  }
}
