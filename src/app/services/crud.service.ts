import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private aux:number;
  private dbInstance: SQLiteObject;
  readonly db_name: string = "favoritess.db";
  readonly db_table: string = "favTable";
  private user_uuid:string;
  FESTIVALS: Array<any>;
  constructor(
    private platform: Platform,
    private sqlite: SQLite
    ) {
      this.aux=1;
    }

    databaseConn(){
      this.platform.ready().then(()=>{
        this.sqlite.create({name:this.db_name, location:'default'}).then(
          (sqLite: SQLiteObject)=> {
            this.dbInstance=sqLite;
            sqLite.executeSql(
              `CREATE TABLE IF NOT EXISTS ${this.db_table}(
                user_uuid varchar(255),
                festival_id INTEGER,
                festival_name varchar(255),
                festival_desc text)`, [])
              .then((res)=> {"adsfsad"+alert(JSON.stringify(res));})
              .catch((error)=> alert("ERRIR"+JSON.stringify(error)));
          })
          .catch((error)=>alert(JSON.stringify(error)));

      });
    }

    public addItem(u,fi,fn, fd){
      if(fn.length <0 || fi.length <0 || u.length <0){
        alert('Provide all the information required');
        return
      }
      this.dbInstance.executeSql(
        `INSERT INTO ${this.db_table}(user_uuid, festival_id, festival_name, festival_desc) VALUES ('${u}','${fi}','${fn}', '${fd}')`,[])
        .then(()=> {
          // alert("Success");
          this.getAllFestivals(this.user_uuid);
        },(e)=>{alert(JSON.stringify(e.err));});
      
    }
 


    getAllFestivals(uuid){
      this.user_uuid=uuid;
      return this.dbInstance.executeSql( `
      SELECT * FROM ${this.db_table} WHERE user_uuid=?`,[uuid]).then((res)=>{
        this.FESTIVALS=[];
        if (res.rows.length>0){
          for (var i=0; i< res.rows.length; i++){
            this.FESTIVALS.push(res.rows.item(i));
          }
          return this.FESTIVALS;
        }
      }, (e)=>{
        alert("adsfsad"+JSON.stringify(e));
      });
    }

    deleteUser(uuid, id){
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE user_uuid =?  AND festival_id=?`,[uuid, id])
      .then(()=>{
        // alert("FESTIVAL DELETED");
        this.getAllFestivals(this.user_uuid);
      })
      .catch(e=>{
        alert(JSON.stringify(e))
      });
    }
}
