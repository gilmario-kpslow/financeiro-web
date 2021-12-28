import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/usuario/usuario.service';
import { processForm } from '../../../core/form.utils';
import { MensagemService } from '../../../components/mensagens/mensagem.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder, private service: UsuarioService, private notification: MensagemService, private router: Router) {
    this.form = fb.group({
      nome: fb.control('',[Validators.required]),
      nomeCompleto: fb.control('',[Validators.required]),
      email: fb.control('', [Validators.email]),
      username: fb.control('', [Validators.required]),
      senha: fb.control('', [Validators.required]),
      confirmar: fb.control('')
    })
  }

  ngOnInit(): void {
    console.log('OK')
  }

  salvar() {
    processForm(this.form, () => {
      this.service.salvar(this.form.value).subscribe((x) => {
        this.notification.success('Usuário cadastrado com sucesso!');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000)
      })
    })

  }

}
