import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAsistencias, IAsistencia } from '../interfaces/interfaces'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http: HttpClient) { }

  listarUsuarios():Observable<IAsistencias> {
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencia`);
  }

  // Retorna todos los que su correo termine con @duocuc.cl 
  listarAlumnos() {
    let alumnos : any = [];
    let json: any;

    this.listarUsuarios().subscribe((data) => { 
      if (data) {
        let dataString = JSON.stringify(data);
        json = JSON.parse(dataString);   
      } else {
          return;
      }

      for (const obj of json) {
          if (!this.isTeacher(obj.correo)) {
                console.log(obj.correo);
                alumnos.push(obj);
          }
      }
    },
    (err) => {
      console.log(err.message);
    }
    );
    return alumnos;
  }

  listarCursosProfesor = async() => {
    let cursosProf : any = [];
    let json: any;
    this.listarUsuarios().subscribe((data) => { 
      if (data) {
        let dataString = JSON.stringify(data);
        json = JSON.parse(dataString);   
      } else {
          return;
      }

      for (const obj of json) {
        if (localStorage.getItem("email") == obj.correo) {
          // var cursos = obj.cursos; //{ cursos: '[{"cur1234":0,"cur5678":0}]' }
          // console.log(Object.keys(obj)[0]);//id
          // console.log(Object.keys(obj)[1]);//nombre
          let i = 0;
          while (Object.keys(obj.cursos)[i]) {
            // console.log(Object.keys(obj.cursos)[i]);
            // console.log(Object.values(obj.cursos)[i]);
            let c : any = [];
            c.push(Object.keys(obj.cursos)[i]);
            c.push(Object.values(obj.cursos)[i]);
            cursosProf.push(c);
            i = i+1;
          }
        }
      }
    },
    (err) => {
      console.log(err.message);
    }
    );
    return cursosProf;
  }  

  // Retorna todos los alumnos que tengan al curso "curso" entre sus cursos :)
  listarAlumnosenCurso(curso: string) {
    let cursos : any = [];
    let json: any;

    this.listarUsuarios().subscribe((data) => { 
      if (data) {
        let dataString = JSON.stringify(data);
        json = JSON.parse(dataString);   
      } else {
          return;
      }

      for (const obj of json) {
        let i = 0;
        while (Object.keys(obj.cursos)[i]) {
          if (Object.keys(obj.cursos)[i] == curso && !this.isTeacher(obj.correo)) {
            // console.log(obj);
            cursos.push(obj);
          }
          i = i+1;
        }
      }
    },
    (err) => {
      console.log(err.message);
    }
    );
    return cursos;
  }

  // Retorna todos los que tengan al curso "curso" entre sus cursos :)
  listarCursos(curso: string) {
    let cursos : any = [];
    let json: any;

    this.listarUsuarios().subscribe((data) => { 
      if (data) {
        let dataString = JSON.stringify(data);
        json = JSON.parse(dataString);   
      } else {
          return;
      }

      for (const obj of json) {
        let i = 0;
        while (Object.keys(obj.cursos)[i]) {
          if (Object.keys(obj.cursos)[i] == curso) {
            console.log(obj);
            cursos.push(obj);
          }
          i = i+1;
        }
      }
    },
    (err) => {
      console.log(err.message);
    }
    );
    return cursos;
  }
  
  getUserByCorreo(correo: string):Observable<IAsistencias> {
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencia/?correo=${correo}`);
  }
  
  actualizarUser(user: any):Observable<IAsistencias> {
    return this.http.put<IAsistencias>(`${environment.apiURL}/asistencia/${user.id}`, user);
  }

  addUser(user: IAsistencia): Observable<IAsistencia> {
    return this.http.post<IAsistencia>(`${environment.apiURL}/asistencia`, user);
  }

  isTeacher(email: string) {    
    var r = new RegExp('^([a-zA-Z0-9_\.]+)@(profesor\.duoc)\.cl$');
    return r.test(email);
  }
  
}
