import { Injectable } from '@angular/core';
import {Observable,of,Subject } from 'rxjs';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map,catchError   } from "rxjs/operators";


import { Project } from "src/app/cclass/project";

//CRUD 
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 public project$ = new Subject<Project>();
 public projects$ = new Subject<Project[]>();

 public project = new Project();
 public projects: Project[] = [];

 httpOptions = {
  header: new HttpHeaders({'content-Type': 'application/json'})
 }

   public url =  environment.appurl;

  constructor(
    private http: HttpClient
  ) { }

  all$(): Observable<Project[]>{
    return this.projects$.asObservable();
  }

  all(): Observable<any>{
    this.projects = []
    return this.http.get<Project[]>(this.url)
    .pipe(
     map( (res: any) =>{
      console.log(res)
     }),
          catchError((err) => of(err))
     )
   }
  }
