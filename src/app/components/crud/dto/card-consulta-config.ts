import ActionButton from "./action-button";

export class CardConsultaConfig {

  constructor(
    public showEditar: boolean = true,
    public showExcluir: boolean = true,
    public showIncluir: boolean = true,
    public showSelect: boolean = false,
    public showContent: boolean = true,
    public selectCallback?: Function,
    public showImprimir: boolean = true,
    public showLimpar: boolean = true,
    public showPesquisar: boolean = true,
    public actions?: ActionButton[]) { }

}
