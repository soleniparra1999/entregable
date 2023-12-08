import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../cclass/project';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent  implements OnInit {

  projects: any[] = []; // projects es un array de proyectos

  constructor(
  public projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    console.log("Página de inicio...");
        this.projectService.all().subscribe(
      (data) => {
        this.projects = data; // Actualiza los proyectos cuando se obtiene la respuesta
      },
      (error) => {
        console.error('Error al obtener proyectos:', error);
      }
    );
  }
}
