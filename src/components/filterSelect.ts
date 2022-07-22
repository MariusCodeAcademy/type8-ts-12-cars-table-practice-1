/*
<div class="container">
  <label for="marke">Marke</label>
  <select id="marke" class="form-select">
    <option value="1">Opel</option>
    <option value="2">BMW</option>
    <option value="3">Subaru</option>
  </select>
</div>
*/

export default class FilterSelect {
  // vidines FilterSelect savybes
  // div, label, select, optiosArray,
  // constructoriuje argumentu gauti brands
  private divEl: HTMLDivElement = document.createElement('div');

  private selectEl: HTMLSelectElement = document.createElement('select');

  private initialize() {
    this.divEl.className = 'container';
    this.selectEl.id = 'marke';
    this.selectEl.className = 'form-select';
    this.divEl.appendChild(this.selectEl);
  }

  get filterEL(): HTMLDivElement {
    return this.divEl;
  }
}
