import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

let bytes: any;

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit{
    title = 'Create Project';

  @ViewChild('projectForm') projectForm!: NgForm;

  constructor( private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
      console.log('hello');
  }

  onFileSelected(event: any) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          bytes = reader.result;
      };
  }

  onSubmit(){
      const values = {
          name_project: this.projectForm.value.projectName,
          owner_project: this.cookieService.get('id'),
          description_project: this.projectForm.value.projectDescription,
          status_project: 1,
          goal_money: this.projectForm.value.projectMoney,
          project_picture: bytes,
          end_date: this.projectForm.value.projectDate,
          searching_workers: this.projectForm.value.projectWorkers
      };
      if (values.goal_money == '') {
          values.goal_money = 0;
      }
      this.http.post('http://localhost:8080/api/projects', values).subscribe();
  }

}