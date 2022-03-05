import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  onSubmit(contactForm: { value: any; }){
    console.log(contactForm.value);
  }
  positionList:position[]=[
    new position("1","Intern"),
    new position("2","Software Developer"),
    new position("3","Architect"),
    new position("4","Manager")
  ];
}

export class position{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
