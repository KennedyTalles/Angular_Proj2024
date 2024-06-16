import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlunosService } from '../../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private aluno: AlunosService, private router: ActivatedRoute) { }

  editarAluno = new FormGroup({
    Nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    Idade: new FormControl('', [
      Validators.required,
      Validators.max(99)
    ]),
    Curso: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    eMail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });
  mensagem: boolean = false;

  ngOnInit(): void {
    this.aluno.getAlunoId(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.editarAluno.patchValue({
        Nome: result['Nome'],
        Idade: result['Idade'],
        Curso: result['Curso'],
        eMail: result['eMail']
      });
    });
  }

  Alterar() {
    this.aluno.editarAluno(this.router.snapshot.params['id'], this.editarAluno.value).subscribe((result) => {
      this.mensagem = true;
    });
  }

  removerMensagem() {
    this.mensagem = false;
  }
}


















// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { AlunosService } from '../../alunos.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-editar',
//   templateUrl: './editar.component.html',
//   styleUrls: ['./editar.component.css']
// })
// export class EditarComponent implements OnInit {

//   constructor(private aluno: AlunosService, private router: ActivatedRoute) { }//aluno ou alunos

//   editarAluno = new FormGroup({
//     Nome: new FormControl(''),
//     Idade: new FormControl(''),
//     Curso: new FormControl(''),
//     eMail: new FormControl(''),
//   });
//   mensagem: boolean = false;
//   ngOnInit(): void {
//     //console.log( this.router.snapshot.params.id); // vdo9 9:25
//     this.aluno.getAlunoId(this.router.snapshot.params['id']).subscribe((result: any) => {
//       // console.log(result);
//       this.editarAluno = new FormGroup({
//         Nome: new FormControl(result['Nome']),
//         Idade: new FormControl(result['Idade']),
//         Curso: new FormControl(result['Curso']),
//         eMail: new FormControl(result['eMail']),
//       });
//     });
//   }
//   Alterar() {
//     this.aluno.editarAluno(this.router.snapshot.params['id'], this.editarAluno.value).subscribe((result) => {
//       //console.log(result);
//       this.mensagem=true;
//     })
//   }
//   removerMensagem() {
//     this.mensagem = false;
//   }
// }
