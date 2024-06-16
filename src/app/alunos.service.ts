import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url = 'http://localhost:3000/alunos';
  constructor(private http: HttpClient) { }
  getALLAlunos() {
    return this.http.get(this.url);
  }
  alunoSalvarBD(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
  deletarAluno(id: any) {
    return this.http.delete(`${this.url}/${id}`); // acento de crase, o invertido! no lugar das aspas
  }
  getAlunoId( id: number ){
    return this.http.get(`${this.url}/${id}`);
  }
  editarAluno(id: number,data: any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
