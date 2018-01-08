# AutocompleteApp

Autocomplete App for showcasing the Autocomplete Component build in Angular.

## Key Features

1. <b>Fluid Responsive Layout</b> of textbox that accomodates any width.
2. Clean <b>manageable Suggestions</b> Box with limited search results. (limit can be updated from config)
3. Search Suggestion & Recent Search <b>Labels</b> to avoid confusion for a user.
4. Consumes <b>REST API</b> to fetch the results. (default list is shown when API is not found)
5. Search <b>results are categorized</b> and sorted.
6. Search text from the results gets <b>highlighted as User types</b>.
7. <b>Suggestions are highlighted</b> when user Mouse hovers.
8. <b>Supports Keyboard Navigation</b> with Arrows among Suggestions. Tap Return/Enter Key to select.
9. <b>Search History</b> is displayed when text is empty. (uses HTML5 localstorage) NOTE: The history gets saved only when a suggestion is clicked or on pressing Enter key.

## Config File (app.constants.ts)

Default Setting for the app:

* <b>apiURL:</b> set URL for the suggestions API
* <b>titleOfAutocompleteBox:</b> Set Title for your autocomplete box.
* <b>numOfSuggestions:</b> The Max number of suggestions to display. <i>(Default 6)</i>
* <b>debounceTime:</b> Delay to reduce api calls when user is typing <i>(Default 300ms)</i>

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
