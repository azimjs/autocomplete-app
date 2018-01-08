# AutocompleteApp

Autocomplete App for showcasing the Autocomplete Component build in Angular. 

## DEMO

**[Click here](http://azimsaiyed.com/autocomplete-app/)** to view demo of Autocomplete Component

## Key Features

1. **Fluid Responsive Layout** of textbox that accomodates any width.
2. Clean **manageable Suggestions** Box with limited search results. (limit can be updated from config)
3. Search Suggestion & Recent Search **Labels** to avoid confusion for a user.
4. Consumes **REST API** to fetch the results. (default list is shown when API is not found)
5. Search **results are categorized** and sorted.
6. Search text from the results gets **highlighted as User types**.
7. **Suggestions are highlighted** when user Mouse hovers.
8. **Supports Keyboard Navigation** with Arrows among Suggestions. Tap Return/Enter Key to select.
9. **Search History** is displayed when text is empty. (uses HTML5 localstorage) NOTE: The history gets saved only when a suggestion is clicked or on pressing Enter key.

## Config File (app.constants.ts)

Default Setting for the app:

* **apiURL:** set URL for the suggestions API
* **titleOfAutocompleteBox:** Set Title for your autocomplete box.
* **numOfSuggestions:** The Max number of suggestions to display. <i>(Default 6)</i>
* **debounceTime:** Delay to reduce api calls when user is typing <i>(Default 300ms)</i>

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
