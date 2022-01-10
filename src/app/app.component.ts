import { Component } from '@angular/core';
import { Contacts } from './models/contacts'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactArray: Contacts[]=[
    {id:1 , name: "Bai", phone: 2123546, birthday: "1993-01-12",address: "Carrera 8a # 115 - 08", mail: "bair@gmail.com"},
    {id:2 , name: "Nairo", phone: 352115464, birthday: "1995-01-12",address: "Carrera 15a # 11 - 09", mail: "nairo@gmail.com"},
    {id:3 , name: "Johana", phone: 121545642, birthday: "1992-01-12",address: "Carrera 36 # 23 - 10", mail: "johana@gmail.com"},
  ];

  selectedContact: Contacts = new Contacts();
  addOrEdit(){
    if(this.selectedContact.id == 0){
      this.selectedContact.id = this.contactArray.length + 1;
      this.contactArray.push(this.selectedContact);
    }
    this.selectedContact = new  Contacts();
  }

  openForEdit(contact: Contacts){
    this.selectedContact = contact;
  }

  delete(){
    if(confirm("Estas seguro de eliminar este usuario ?")){
      this.contactArray = this.contactArray.filter(x => x != this.selectedContact)
      this.selectedContact = new  Contacts();
    }
    
  }
}
