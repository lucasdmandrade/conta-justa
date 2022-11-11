export interface IClient {
  name: string;
  personalValue: number;
}

export interface ITable {
  totalValue: number;
  clients: IClient[];
}
