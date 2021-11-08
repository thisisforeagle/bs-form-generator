export interface IColumn {
  class: string;
}

export interface IRow {
  class: string;
  columns: IColumn[];
}

export interface IBSForm {
  rows: IRow[];
}
