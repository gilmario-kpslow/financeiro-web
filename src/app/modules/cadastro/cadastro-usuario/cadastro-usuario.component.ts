import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/usuario/usuario.service';
import { processForm } from '../../../core/form.utils';
import { MensagemService } from '../../../components/mensagens/mensagem.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder, private service: UsuarioService, private notification: MensagemService, private router: Router) {
    this.form = fb.group({
      nome: fb.control('', [Validators.required]),
      username: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.email]),
      password: fb.control('', [Validators.required]),
      confirmar: fb.control('')
    })
  }

  ngOnInit(): void {

  }

  salvar() {
    processForm(this.form, () => {
      this.service.salvar(this.form.value).subscribe((x) => {
        this.notification.success('Usuário cadastrado com sucesso!');
        timer(1000).subscribe(() => {
          this.router.navigate(['/']);
        })
      })
    })

  }

}
