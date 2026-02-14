# TestTaskWords

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Functionality

- Enter text into the input text field and press the submit button to get the list of synonyms
- Enter text into the input text field. Highlight some text from the input field and press the submit button - the highlighted text will be searched instead.
- Word and symbol count for the input
- Once you have the list of synonyms, select a synonym and click the button "Use" to paste it into the input field
- "Copy to cipboard" button

## Reasoning about the project structure

I did not see the need to overengineer the structure. 

3 Components - the page, the input and the output.
1 Service - API call for synonyms. 

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

