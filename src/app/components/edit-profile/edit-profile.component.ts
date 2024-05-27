import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArrayName } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit {
  profileData : FormGroup = new FormGroup({
   name: new FormControl('', Validators.required),
   email: new FormControl('', Validators.required),
   contactNo: new FormControl('', Validators.required),
   address: new FormControl('', Validators.required),

  })

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    const selectedFile: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log("click");
    
  }


  get name (){
    return this.profileData.get('name');
  }
  get email(){
return this.profileData.get('email')
  }
  get contactNo()
{
  return this.profileData.get('contactNo')
}
 
 get address(){
  return this.profileData.get('address')
 }
 submitForm(){
  alert('Form Submitted Successfully')
 }
}

