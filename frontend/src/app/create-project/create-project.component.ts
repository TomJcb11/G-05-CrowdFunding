import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

let bytes: string | ArrayBuffer | null = null;

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
      const projectName = this.projectForm.value.projectName;
      const ownerProject = this.cookieService.get('id');
      const projectDescription = this.projectForm.value.projectDescription;
      const goalMoney = this.projectForm.value.projectMoney;
      const projectPicture = bytes;
      const endDate = this.projectForm.value.projectEndDate;
      const searchingWorkers = false;
    
      if (projectName && ownerProject && projectDescription && goalMoney && endDate) {
          const values = {
              name_project: projectName,
              owner_project: ownerProject,
              description_project: projectDescription,
              status_project: 1,
              goal_money: goalMoney,
              project_picture: projectPicture,
              end_date: endDate,
              searching_workers: searchingWorkers
                
          };
          if (values.goal_money == '') {
              values.goal_money = 0;
          }
          this.http.post('http://localhost:8080/api/projects', values).subscribe();
      }else{
          throw new Error('Missing fields');
      }
  }
}