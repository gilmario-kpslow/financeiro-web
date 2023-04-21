import { UsuarioResponse } from "./usuario-response"

export interface UsuarioAutenticado {
  token: string
  usuario: UsuarioResponse
}
