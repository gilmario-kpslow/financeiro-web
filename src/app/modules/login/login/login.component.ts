import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { processForm } from '../../../core/form.utils';
import { LoginService } from '../login.service';
import { SegurancaService } from '../../../core/seguranca/seguranca.service';
import { AplicacaoService } from '../../../core/application/aplicacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder,private service: LoginService,
    private segurancaService: SegurancaService,
    private appService: AplicacaoService, private router: Router) {
    this.form = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })
  }

  ngOnInit(): void {
    // console.log(this.segurancaService.isLogado)
  }

  login() {
    console.log(this.form.valid, this.form.value)
    if(this.form.valid) {
      processForm(this.form, () => {
        this.service.logar(this.form.value).subscribe(u => {
          this.segurancaService.setUsuarioLogado(u)
          // this.appService.mountMenu()
          this.router.navigate(['/'])
        })
      })
    }
  }

}
