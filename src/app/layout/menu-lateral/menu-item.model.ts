export class MenuItem {

  constructor(obj: MenuItem) {
    this.nome = obj.nome
    this.visivel = obj.visivel
    this.activeClass = obj.activeClass || 'menu-ativo'
    this.filhos = obj.filhos || []
    this.icone = obj.icone || 'help'
    this.ordem = obj.ordem || 0
    this.command = obj.command
    this.rota = obj.rota
  }

  ordem?: number
  nome: string
  visivel?: boolean
  activeClass?: string
  filhos?: MenuItem[]
  icone?: string
  rota: string[] = []
  command?: (event?: any) => void;

}
