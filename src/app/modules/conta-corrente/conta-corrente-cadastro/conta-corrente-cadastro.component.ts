import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { processForm } from '../../../core/form.utils';
import { MensagemService } from '../../../components/mensagens/mensagem.service';
import { ContaCorrente } from 'src/app/core/conta-corrente/conta-corrente';
import { ContaCorrenteService } from 'src/app/core/conta-corrente/conta-corrente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-corrente-cadastro',
  templateUrl: './conta-corrente-cadastro.component.html',
  styleUrls: ['./conta-corrente-cadastro.component.css']
})
export class ContaCorrenteCadastroComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder, private notification: MensagemService,
    private router: Router,
    private service: ContaCorrenteService) {
    this.form = fb.group({
      nome: fb.control('',[Validators.required, Validators.maxLength(30)])
    })

  }

  ngOnInit(): void {
  }

  salvar() {
    processForm(this.form, () => {
      this.service.salvar(this.form.value).subscribe((entity: ContaCorrente) => {
        this.notification.success('Conta corrente realizada com sucesso!');
        setTimeout(() => {
         this.router.navigate(['/']);
        }, 1000)
      })
    })

  }

}
