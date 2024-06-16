import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlunosService } from '../../alunos.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css']
})
export class AddAlunoComponent implements OnInit {

  constructor(private aluno: AlunosService) { }
  
  addalunoADD = new FormGroup({
    Nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z\s]+$/) // Permite apenas letras e espaços
    ]),
    Idade: new FormControl('', [
      Validators.required,
      Validators.max(99),
      Validators.pattern(/^\d+$/) // Permite apenas números
    ]),
    Curso: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\d]*$/) // Não permite números
    ]),
    eMail: new FormControl('', [
      Validators.required,
      Validators.email // Valida se é um email válido
    ]),
  });
  
  mensagem: boolean = false;
  
  ngOnInit(): void {
  }
  
  Salvar() {
    if (this.addalunoADD.valid) {
      this.aluno.alunoSalvarBD(this.addalunoADD.value).subscribe((result) => {
        this.mensagem = true;
        this.addalunoADD.reset({});
        setTimeout(() => {
          this.removerMensagem();
        }, 3000); // Remove a mensagem após 3 segundos
      });
    } else {
      this.validateAllFormFields(this.addalunoADD); // dispara a validação para todos os campos
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  removerMensagem() {
    this.mensagem = false;
  }
}















// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AlunosService } from '../../alunos.service';

// @Component({
//   selector: 'app-add-aluno',
//   templateUrl: './add-aluno.component.html',
//   styleUrls: ['./add-aluno.component.css']
// })
// export class AddAlunoComponent implements OnInit {

//   constructor(private aluno: AlunosService) { }
  
//   addalunoADD = new FormGroup({
//     Nome: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//       Validators.pattern(/^[A-Za-z\s]+$/) // Permite apenas letras e espaços
//     ]),
//     Idade: new FormControl('', [
//       Validators.required,
//       Validators.max(99),
//       Validators.pattern(/^\d+$/) // Permite apenas números
//     ]),
//     Curso: new FormControl('', [
//       Validators.required,
//       Validators.pattern(/^[^\d]*$/) // Não permite números
//     ]),
//     eMail: new FormControl('', [
//       Validators.required,
//       Validators.email // Valida se é um email válido
//     ]),
//   });
  
//   mensagem: boolean = false;
  
//   ngOnInit(): void {
//   }
  
//   Salvar() {
//     if (this.addalunoADD.valid) {
//       this.aluno.alunoSalvarBD(this.addalunoADD.value).subscribe((result) => {
//         this.mensagem = true;
//         this.addalunoADD.reset({});
//         setTimeout(() => {
//           this.removerMensagem();
//         }, 3000); // Remove a mensagem após 3 segundos
//       });
//     } else {
//       this.validateAllFormFields(this.addalunoADD); // dispara a validação para todos os campos
//     }
//   }

//   validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(field => {
//       const control = formGroup.get(field);
//       if (control instanceof FormControl) {
//         control.markAsTouched({ onlySelf: true });
//       } else if (control instanceof FormGroup) {
//         this.validateAllFormFields(control);
//       }
//     });
//   }

//   removerMensagem() {
//     this.mensagem = false;
//   }
// }




























// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { AlunosService } from '../../alunos.service';

// @Component({
//   selector: 'app-add-aluno',
//   templateUrl: './add-aluno.component.html',
//   styleUrls: ['./add-aluno.component.css']
// })
// export class AddAlunoComponent implements OnInit {

//   constructor(private aluno: AlunosService) { }
//   addalunoADD = new FormGroup({
//     Nome: new FormControl(''),
//     Idade: new FormControl(''),
//     Curso: new FormControl(''),
//     eMail: new FormControl(''),
//   });
//   mensagem: boolean = false;
//   ngOnInit(): void {
//   }
//   Salvar() {
//     //console.log(this.addalunoADD.value);
//     this.aluno.alunoSalvarBD(this.addalunoADD.value).subscribe((result) => {
//       //console.log( result );
//       this.mensagem = true;
//       this.addalunoADD.reset({});
//     });
//   }
//   removerMensagem() {
//     this.mensagem = false;
//   }
// }