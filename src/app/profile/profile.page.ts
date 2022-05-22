import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseRepositoryService } from '../services/FirebaseRepository/firebase-repository.service';
import { reload } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  userPhoto: string;
  private id: string;
  public formData = new FormData();
  public fileName = '';
  isCompany: boolean = false;

  editDataForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    photoUrl: new FormControl(''),
    userName: new FormControl('')
  })

  fileForm = new FormGroup({
    file: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private fireRepoSvc: FirebaseRepositoryService
  ) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.authService.readUser().then((data) => {
      this.editDataForm.get("firstName")!.setValue(data!.get("firstName"))
      this.editDataForm.get("lastName")!.setValue(data!.get("lastName"))
      this.editDataForm.get("email")!.setValue(data!.get("email"))
      this.userPhoto = data.get!("photoUrl")
      this.editDataForm.get("userName")!.setValue(data!.get("userName"))
      this.isCompany = data.get!("company")
      this.id = this.authService.getUserUid();
      console.log("uid " + this.id);
      console.log("company? " + this.isCompany);
    })    
  }

  updateUserData() {
    this.updateData("Su nombre de usuario ha sido actualizado");
  }

  updateCompanyData() {
    this.updateData("El nombre de su empresa ha sido actualizado");
  }

  updateData(message) {
    let userName = this.editDataForm.get("userName")!.value;

    if (userName == "") {
      alert("No pueden haber campos vacíos")
    } else {
      this.authService.updateUser(userName);
      this.alertMessage(message);
      // window.location.assign('/');
      // window.location.reload();
      // this.router.navigateByUrl("/profile")
    }
  }

  public async loadFile() {
    if (this.formData.get('file')) {
      let file = this.formData.get('file');
      await this.fireRepoSvc.csTask(this.fileName, file, this.id);
      let ref = await this.fireRepoSvc.csReference(this.fileName, this.id);

      ref.getDownloadURL().subscribe((URL) => {
        this.authService.updateUserPhoto(URL);
        this.userPhoto = URL;
        this.alertMessage("Su foto de perfil ha sido actualizada");
      })

      this.formData.delete('file');
      this.fileForm.get("file")?.reset();
    } else {
      this.alertMessage("Debe seleccionar un archivo");
    }
  }

  public changeFile(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.fileName = event.target.files[i].name;
        this.formData.delete('file');
        this.formData.append('file', event.target.files[i], event.target.files[i].name)
      }
    }
  }

  alertMessage(message: string) {
    alert(message);
  }
}
