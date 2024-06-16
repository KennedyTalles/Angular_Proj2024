import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlunosService } from '../../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor(private aluno: AlunosService, private router: ActivatedRoute) { }

  detalheAluno = new FormGroup({
    Procurar: new FormControl(''),
    Nome: new FormControl(''),
    Idade: new FormControl(''),
    Curso: new FormControl(''),
    eMail: new FormControl(''),
  });

  ngOnInit(): void {
    this.buscarAlunoPorId(Number(this.router.snapshot.params['id']));// buscar aluno pelo id da rota ao inicializar o componente, descomentar esta linha!!!
  }

  buscarAluno() {
    const id = this.detalheAluno.get('Procurar')?.value;
    if (id) {
      this.buscarAlunoPorId(Number(id));
    }
  }

  buscarAlunoPorId(id: number) {
    this.aluno.getAlunoId(id).subscribe((result: any) => {
      this.detalheAluno.patchValue({
        Nome: result['Nome'],
        Idade: result['Idade'],
        Curso: result['Curso'],
        eMail: result['eMail']
      });
    });
  }
}











// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { AlunosService } from '../../alunos.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-detalhe',
//   templateUrl: './detalhe.component.html',
//   styleUrls: ['./detalhe.component.css']
// })
// export class DetalheComponent implements OnInit {

//   constructor(private aluno: AlunosService, private router: ActivatedRoute) { }

//   detalheAluno = new FormGroup({
//     Procurar: new FormControl(''),
//     Nome: new FormControl(''),
//     Idade: new FormControl(''),
//     Curso: new FormControl(''),
//     eMail: new FormControl(''),
//   });

//   ngOnInit(): void {
//     // Caso queira buscar aluno pelo id da rota ao inicializar o componente, descomente a linha abaixo
//     // this.buscarAlunoPorId(this.router.snapshot.params['id']);
//   }

//   buscarAluno() {
//     const id = this.detalheAluno.get('Procurar')?.value;
//     if (id) {
//       this.buscarAlunoPorId(id);
//     }
//   }

//   buscarAlunoPorId(id: string) {
//     this.aluno.getAlunoId(id).subscribe((result: any) => {
//       this.detalheAluno.patchValue({
//         Nome: result['Nome'],
//         Idade: result['Idade'],
//         Curso: result['Curso'],
//         eMail: result['eMail']
//       });
//     });
//   }
// }
