> To use redux install `redux` and `react-redux` npm packages, by running command:
>> npm install redux react-redux
>
> Folder Structure: - - - - - - - - - - - - - - - - - -
>
> Create a folder `redux` in the `src` folder.
> - within `redux` create sub-folders based on work like for authentication `auth` and then within these sub-folders create folders as:
> - - `actions` : Contains action creators, each file could correspond to a specific action type.
>
> - - `reducers` : Holds reducer files.
> - - `constants` : action types used in reducers.
> - - `store` : Includes the store configuration (like creating the Redux store).
> - - `middlewares` : Contains custom middleware used in Redux.
> - - `selectors` : Holds selector functions to retrieve specific parts of the Redux state.
>
> Step 1: Create `store.js` in the `store` folder, see example code.