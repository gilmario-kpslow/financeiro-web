import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { processForm } from '../../../core/form.utils';
import { LoginService } from '../login.service';
import { SegurancaService } from '../../../core/seguranca/seguranca.service';
import { AplicacaoService } from '../../../core/application/aplicacao.service';
import { Router } from '@angular/router';
import { VersaoService } from '../../../core/application/versao.service';
import { version } from '../../../../../package.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  username: FormControl
  password: FormControl
  versaoApi: any
  versaoFront = version
  constructor(fb: FormBuilder, private service: LoginService,
    private segurancaService: SegurancaService,
    private versaoService: VersaoService,
    private appService: AplicacaoService, private router: Router) {
    this.form = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })
    this.username = this.form.get('username') as FormControl;
    this.password = this.form.get('password') as FormControl;

    this.versaoService.getVersaoApi().subscribe({
      next: (v) => {
        this.versaoApi = v;
      }, error: (e) => this.versaoApi = { version: '1.0.0' }
    })

  }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      processForm(this.form, () => {
        this.service.logar(this.form.value).subscribe(u => {
          this.segurancaService.setUsuarioLogado(u)
          this.router.navigate(['/'])
        })
      })
    }
  }


}
