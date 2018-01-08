import {Component, OnInit} from '@angular/core';
import {SuggestionsService} from './_services/suggestions.service';
import {Subject} from 'rxjs/Subject';
import {Suggestions} from './Suggestions';
import {AppConstants} from '../app.constants';
import {SearchHistory} from './SearchHistory';
import {Flags} from './Flags';
import {DefaultSuggestions} from './_services/default.suggestions';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [SuggestionsService]
})

export class AutocompleteComponent implements OnInit {

  private _search = new Subject<string>();

  public searchString: string;
  public titleOfBox = AppConstants.titleOfAutocompleteBox;

  public flag: Flags;
  public suggestion: Suggestions;
  public searchHistory: SearchHistory;

  constructor(private suggestionsService: SuggestionsService) {
    // INITIALIZATIONS
    this.searchString = '';
    this.flag = new Flags();
    this.suggestion = new Suggestions(AppConstants.numOfSuggestions);
    this.searchHistory = new SearchHistory();

    // SUBSCRIBE TO API SERVICE
    this.suggestionsService.search(this._search)
      .subscribe((data) => {
          this.suggestion.suggestionsList = this._filterResultsFromAPI(data);

          // hide the results box when there is no match found
          if (!this.suggestion.suggestionsList.length) this.flag.result = false;
        },
        (err) => {
          // DEFAULT JSON GIVEN WHEN API IS NOT FOUND
          this.suggestion.suggestionsList = this._filterResultsFromAPI(DefaultSuggestions.products);
        });
  }

  ngOnInit() {
  }

  /*
   * Event which handles the below things:
   *   1. Displays history box when text is erased completely
   *   2. Navigate suggestions by detecting arrow keys
   *   3. Selects a value when RETURN key is pressed
   *   4. call the Service to look up the text when user types
   */
  onKeyUp(ev): void {

    // 1. show the history box only when there is no text
    if (ev.target.value === '') {
      this.flag.showhistoryBox();
      return;
    }

    // 2. navigate suggestions with arrow key
    if (this.suggestion.isArrowKeyPressed(ev.keyCode)) {
      console.log('arrow key pressed');
      this.suggestion.highlightSuggestion(ev.keyCode);
      return;
    }

    // 3. select a value on tapping Return key
    if (this.suggestion.isReturnKeyPressed(ev.keyCode) && this.suggestion.currentHighlightedIndex >= 0) {
      this._selectvalue(this.suggestion.currentHighlighted);
      this.suggestion.resetHighlightedSuggestion();
      return;
    }

    // 4. search for the word
    this.suggestion.resetHighlightedSuggestion();
    this._search.next(ev.target.value);
    this.flag.showresultBox();
  }

  /*
   * Shows the history box on FOCUS when text is null
   */
  onFocus(ev): void {
    if (this.searchString === '') {
      this.flag.showhistoryBox();
    }
  }

  /*
   * Disables the suggestion box when focus is moved outside of search box
   */
  onBlur(ev): void {
    setTimeout(() => {
      this.flag.hideAllBoxes();
    }, 100);
  }

  /*
   * Selects a value to show the selected text in the search-box
   */
  _selectvalue(val): void {
    this.searchString = val;
    this.flag.hideAllBoxes();
    this.searchHistory.saveEntry(val);
  }

  /*
   * The function filters the search result based on SearchText
   */
  _filterResultsFromAPI(data) {
    return data
      .filter((d) => {
        return d.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1;
      })
      .slice(0, this.suggestion.totalSuggestions) // slices to max allowable suggestions
      .sort((a, b) => {
        // sort the results based on type
        return a.type > b.type;
      })
      .map((d, i, a) => {
        // This map will keep the TYPE property for the last element
        // for each TYPE to show in suggestion box
        let obj;
        if ((a[i + 1] && (a[i + 1].type !== d.type)) || a.length === i + 1) {
          obj = {name: d.name, type: d.type};
        } else {
          obj = {name: d.name};
        }
        return obj;
      });
  }
}
