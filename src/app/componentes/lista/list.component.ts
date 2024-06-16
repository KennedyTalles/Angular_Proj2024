import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../alunos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  constructor(private alunos: AlunosService) { }
  alunosData: any = [];

  ngOnInit(): void {
    this.alunos.getALLAlunos().subscribe((allData) => {
      console.log(allData);
      this.alunosData = allData;
    });
  }

  deletarAluno(aluno_id: any) {
    if (confirm('Você tem certeza que deseja deletar este aluno?')) {
      this.alunos.deletarAluno(aluno_id).subscribe((result) => {
        // console.log(result);
        this.ngOnInit();
      });
    }
  }
}














// import { Component, OnInit } from '@angular/core';
// import { AlunosService } from '../../alunos.service';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css'],
// })
// export class ListComponent implements OnInit {

//   constructor(private alunos: AlunosService) { }
//   alunosData: any = [];  //Duvida se é !!!!!  alunos ou aluno
//   ngOnInit(): void {
//     this.alunos.getALLAlunos().subscribe((allData) => {
//       console.log(allData);
//       this.alunosData = allData;
//     });
//   }
//   deletarAluno(aluno_id: any) {
//     this.alunos.deletarAluno(aluno_id).subscribe((result) => {
//       // console.log(result);
//       this.ngOnInit();
//     });
//   }

// }
