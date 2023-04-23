import { PipeTransform } from '@angular/core';

export class Coluna {

  constructor(campo: string) {
    this.campo = campo
  }
  nome?: string;
  campo: string;
  ordenar?: boolean;
  pipe?: PipeTransform;
  parametros?: string[];
  styleClass: string = "";
}
