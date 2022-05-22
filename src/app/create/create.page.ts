import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  authy: AuthService;
  uuidUser: string ="";
  fesnameVal:string ="";
  fesidVal: number;
  fesdescVal:string="";
  constructor(private crud: CrudService, private auth: AuthService) {
    this.authy=auth;
    if (this.checkLogin()){
      this.crud.databaseConn();
    }
     
   }
    
   ionViewDidEnter(){
    //  this.crud.getAllUsers()
    this.crud.getAllFestivals(this.uuidUser);
   }

   

   remove(uuid, id){
     this.crud.deleteUser(uuid, id)
   }

  ngOnInit() {
  }

  checkLogin():boolean{
    //this.authy.hola()
    if (this.authy.checkIfCurrentUser()) {
      this.uuidUser=this.authy.getUserUid();
      return true;
    }else{
      alert("Para acceder a esta pagina tiene que estar logueado");
      window.location.assign("/festivales");
      return false;
    }

  }
  

}
