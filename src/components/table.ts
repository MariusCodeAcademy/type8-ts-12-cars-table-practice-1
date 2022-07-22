import CarJoined from '../types/car-joined';

type StringOrNumber = string | number;

type TableProps = {
  title: string;
  columns: StringOrNumber;
  rowsData: StringOrNumber[];
};

export default class MyTable {
  private colNames: string[] = ['id', 'marke', 'modelis', 'kaina', 'metai'];

  // private props: TableProps,
  private _htmlTable: HTMLTableElement = document.createElement('table');

  private thead: HTMLTableSectionElement = document.createElement('thead');

  private tbody: HTMLTableSectionElement = document.createElement('tbody');

  constructor(private data: CarJoined[]) {
    this.initialize();
  }

  private makeOneRow(dataRow: CarJoined): HTMLTableRowElement {}

  private createTableHeader(): void {
    // sukurti table headers elementus
    const tr = document.createElement('tr');
    this.colNames.forEach((n: string) => {
      const th = document.createElement('th');
      th.textContent = n;
      tr.appendChild(th);
    });
    this.thead.appendChild(tr);
    this._htmlTable.appendChild(this.thead);
  }

  private initialize(): void {
    // sukurti table headers elementus
    this.createTableHeader();
    this._htmlTable.className = 'table table-striped';
    // sukurti table body
    // graziti arba atvaizdtuoti table
  }

  get htmlTable(): HTMLTableElement {
    return this._htmlTable;
  }
}
