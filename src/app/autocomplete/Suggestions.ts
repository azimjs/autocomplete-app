/*
* Handles the Suggestions and the user interaction with
* the suggestions list. Handles MouseHover highlighting and
* keyboard navigation.
 */
export class Suggestions {

  highlightedSuggestion: Array<boolean> = [];
  suggestionsList: Array<Object> = [];

  private _totalSuggestions: number;
  private _currentHighlighted: number;

  constructor(totalSuggestions) {
    this._totalSuggestions = totalSuggestions;
    this.resetHighlightedSuggestion();
  }

  resetHighlightedSuggestion(): void {
    this._currentHighlighted = -1;
    this.highlightedSuggestion.fill(false);
  }

  mouseHover(ev, index) {
    this.resetHighlightedSuggestion();
    this._currentHighlighted = index;
    this.highlightedSuggestion[index] = true;
  }

  isReturnKeyPressed(keyCode): boolean {
    return (keyCode === 13) ? true : false;
  }

  isArrowKeyPressed(keyCode): boolean {
    return (keyCode === 40 || keyCode === 38) ? true : false;
  }

  get totalSuggestions(): number {
    return this._totalSuggestions;
  }

  get currentHighlightedIndex(): number {
    return this._currentHighlighted;
  }

  get currentHighlighted(): string {
    return this.suggestionsList[this._currentHighlighted]['name'];
  }

  highlightSuggestion(keyCode): void {
    (keyCode === 40) ? this._highlightNextSuggestion() : this._highlightPrevSuggestion();
  }

  private _highlightNextSuggestion(): void {
    this.highlightedSuggestion[this._currentHighlighted] = false;
    this._currentHighlighted = (this._currentHighlighted + 1) % this._totalSuggestions;
    this.highlightedSuggestion[this._currentHighlighted] = true;
  }

  private _highlightPrevSuggestion(): void {
    this.highlightedSuggestion[this._currentHighlighted] = false;
    this._currentHighlighted = (this._currentHighlighted - 1 < 0) ? this._totalSuggestions - 1 : (this._currentHighlighted - 1) % this._totalSuggestions;
    this.highlightedSuggestion[this._currentHighlighted] = true;
  }

}
