export class CardConsultaAction {
  constructor(public label: string,
    public icon: string,
    public action: (event: any) => void,
    public disable?: (event: any) => boolean) { }
}
