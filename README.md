
# Autocomplete Search Component

This project implements an autocomplete search feature using React. It allows users to type in a search query, which then fetches matching posts from an API and displays them in a dropdown list with highlighted matching terms. Users can select a suggestion from the list to auto-fill the input field.

## Features

- **Debounced Search**: Reduces API calls by delaying the search until the user stops typing.
- **Search Highlighting**: Highlights the matching part of the text in each suggestion.
- **Selectable Suggestions**: Users can click on suggestions to auto-fill the input field.
- **Error Handling**: Displays errors in case of a failed API request.
- **Multiselect by Default**: The autocomplete component supports selecting multiple suggestions by default.
- **Loading State**: Displays a loading message while fetching data.
- **Scrollable Results**: Limits the list height and makes it scrollable when there are many suggestions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HakobSargsyan/Autocomplete.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

   or if you are using Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

   or with Yarn:

   ```bash
   yarn start
   ```

   Visit `http://localhost:5173` to view the app.

4. Start Unit tests

   ```bash
   pnpm test
   ```

4. Start development build

   ```bash
   pnpm build
   ```
   
## Usage

### Autocomplete Component

The main component of the application is `Autocomplete`, which handles the search functionality. You can use it by importing and rendering it in your app.

Example usage:

```tsx
import React, { useState } from "react";
import Autocomplete from "./components/organizms/Autocomplete";

const App: React.FC = () => {
    const [placeholder, setPlaceholder] = useState<string>('Search Posts');

    return (
        <div>
            <h1>Search for Posts</h1>
            <Autocomplete placeholder={placeholder} multiselect={false}/>
        </div>
    );
};

export default App;
```

### Components Breakdown

1. **Autocomplete**:
    - Handles the search input, API request, and displays the suggestions.
    - It uses a custom `useDebounce` hook to manage debouncing for the input value.

2. **SuggestionList**:
    - Renders a list of suggestions based on the fetched data.
    - The list is scrollable if there are many suggestions.

3. **SuggestionItem**:
    - Displays an individual suggestion, with a highlighted matching query.

4. **useDebounce Hook**:
    - Provides the debouncing functionality to delay the API call until the user stops typing.

5. **Styles**:
    - All styles are organized into CSS modules to prevent conflicts and improve maintainability.

## API Endpoint

The autocomplete functionality fetches post data from an API endpoint. You can replace the API URL in `apiUrls.ts` with the actual URL you are using.

Example API endpoint:

```ts
const apiUrls = {
    posts_search: "https://api.example.com/search/posts?q=",
};
```

## Example Response Format

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Post Title 1",
      "reactions": {
        "likes": 10,
        "dislikes": 2
      },
      "views": 100
    },
    {
      "id": 2,
      "title": "Post Title 2",
      "reactions": {
        "likes": 5,
        "dislikes": 1
      },
      "views": 50
    }
  ]
}
```

## Development

- **React**: This project is built with React for the front-end.
- **TypeScript**: The project uses TypeScript for static type checking.
- **CSS Modules**: For styling individual components.
- **Custom Hooks**: Custom hooks like `useDebounce` are used for better separation of concerns and to avoid redundant logic.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
