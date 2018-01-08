/*
* Flags to enable/disable Suggestion & History boxes
 */
export class Flags {
  _result: boolean;
  _history: boolean;

  constructor() {
    this._result = false;
    this._history = false;
  }

  get result(): boolean {
    return this._result;
  }

  set result(val) {
    this._result = val;
  }

  get history(): boolean {
    return this._history;
  }

  set history(val) {
    this._history = val;
  }

  showresultBox(): void {
    this._result = true;
    this._history = false;
  }

  showhistoryBox(): void {
    this._history = true;
    this._result = false;
  }

  hideAllBoxes(): void {
    this._result = false;
    this._history = false;
  }
}
