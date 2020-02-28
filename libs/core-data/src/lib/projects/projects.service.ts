import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';

const BASE_URL = 'https://bb-base-server.herokuapp.com';
const model = 'projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  all(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getUrl())
  }

  findOne(id: string): Observable<Project> {
    return this.http.get<Project>(this.getUrlWithId(id))
  }

  create(project: Project): Observable<Project> {
    return this.http.get<Project>(this.getUrl(), project)
  }

  update(project: Project): Observable<Project> {
    return this.http.get<Project>(this.getUrlWithId(project.id), project)
  }

  delete(project: Project): Observable<Project> {
    return this.http.get<Project>(this.getUrlWithId(project.id))
  }

  private getUrl() {
    return `${BASE_URL}/${model}`;
  }
  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
