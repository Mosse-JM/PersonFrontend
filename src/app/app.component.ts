import { Component } from '@angular/core';
import { Person } from './_models/person.model';
import { PersonService } from './_services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Person-Frontend';
  personList:Person[];

  constructor(private personService:PersonService) { }

  ngOnInit() {
  
    this.personService.getAllPersons()
            .subscribe((result) => {
              this.personList = result;             
            },
            error => { //This is error part
              console.log(error.message);
            },
            () => {
                //  This is Success part
                console.log("Persons fetched sucssesfully.");
                }
            )

  }
}
