import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit{
  title = 'Create Project';

  @ViewChild('projectForm') projectForm!: NgForm;

  constructor( public http: HttpClient) {}

  ngOnInit(): void {
    let moneyValue = document.getElementById('moneyValue') as HTMLInputElement;
    let displayValue = document.getElementById('displayValue') as HTMLInputElement;

    moneyValue.addEventListener('input', () => {
      displayValue.value = moneyValue.value;
    });
  };

  onSubmit() {

    let values = this.projectForm.value;
    if (values.projectMoney == '') {
      values.projectMoney = 0;
    };
    this.http.post('http://localhost:8080/api/projects', values).subscribe(data => {console.log(data)});

  }

}