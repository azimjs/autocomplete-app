/*
* Maintains the user Search history in HTML5 Local Storage.
* Saves the value only when it is clicked/tapped or pressed Return after selecting.
 */
export class SearchHistory {

  get events(): string {
    return localStorage.getItem('products-autocomplete');
  }

  set events(val) {
    localStorage.setItem('products-autocomplete', val);
  }

  saveEntry(val): void {
    if(!this.events) this.events = '';
    let temp = this.events.split(',');
    temp = temp.filter((d) => d !== val && d !== '');
    temp.unshift(val);
    this.events = temp.join(',');
  }

  getEntries(): string[] {
    return (this.events !== null) ? this.events.split(',') : null;
  }
}
