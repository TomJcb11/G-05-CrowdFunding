import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../../Services/get.service';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.scss']
})
export class OneProjectComponent implements OnInit {
  project_info: any;

  constructor(private GetService: GetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.GetService.getOneProject(id).subscribe((project_info: any) => {
      this.project_info = project_info;
    });
  }
}
