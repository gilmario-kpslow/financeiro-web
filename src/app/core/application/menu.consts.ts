import { MenuItem } from '../../layout/menu-lateral/menu-item.model';
export class MenuConsts {

  home = new MenuItem({ nome: 'Home', rota: ['/'], icone: 'home', activeClass: '' })
  dashboard = new MenuItem({ nome: 'Dashboard', rota: ['/dashboard'], icone: 'dashboard' })
  login = new MenuItem({ nome: 'Login', rota: ['/', 'login'], icone: 'account_box' })
  cadastro = new MenuItem({ nome: 'Participar', rota: ['/', 'registro'], icone: 'person_add' })
  projeto = new MenuItem({ nome: 'Projetos', rota: ['/', 'projeto'], icone: 'description' })
  apps = new MenuItem({ nome: 'Apps', rota: ['/', 'apps'], icone: 'videogame_asset' })
  logout = new MenuItem({ nome: 'Logout', rota: ['/', 'logout'], icone: 'exit_to_app' })
  configuracoes = new MenuItem({ nome: 'Configuracao', rota: ['/', 'conf'], icone: 'settings' })
  usuario = new MenuItem({ nome: 'Usuário', rota: ['/', 'usuario'], icone: 'people' })

}
