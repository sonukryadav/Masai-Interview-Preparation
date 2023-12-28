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
> Step 1: Create `store.js` in the `store` folder, see example code. Also use other configuration like middleware, combine multiple reducers and so on.
>
> Step 2: Define actions types in the `constants/actionTypes.js`.
>
> Step 3: Create actions creators in the `actions` folder.
>
> Step 4: Create reducers in the `reducers` folder.
>
> Step 5: Now using `useSelector` kook to access store and dispatch actions using `useDispatch` hook.
>
>
> Important definitions:
>
> # Redux
> ```
>Redux is a predictable state container for JavaScript applications, primarily used with libraries like React or Angular for managing application state. It provides a centralized and predictable way to manage the state of your entire application.
>
> At its core, Redux operates based on three fundamental principles:
>
> 1. Single Source of Truth: The entire state of your application is stored in an object tree within a single store. This allows for a centralized and predictable state management system.
>
> 2. State is Read-Only: The only way to modify the state is by emitting an action, which is an object describing what happened. These actions get dispatched to reducers, which specify how the state should change.
>
> 3. Changes are made with Pure Functions (Reducers): Reducers take the current state and an action and return the new state. They are pure functions, meaning they produce the same output for a given input and don't modify the state directly.
>
>
> Redux helps in managing complex application states by enabling the separation of concerns. Actions describe events that occur, reducers specify how the state changes in response to those events, and the store holds the application state.
>```


> # Action
>```
> An action is a plain JavaScript object that represents an intention to change the state. It's the minimal unit of change in a Redux application. Actions carry payloads of information that send data from your application to the Redux store. These payloads, usually containing a type property to indicate the type of action being performed, are typically created by action creators.
>
>For instance, an action to add a new item might look like this:
>{
>  type: 'ADD_ITEM',
>  payload: {
>    id: 1,
>    name: 'New Item'
>  }
>}
>
> type: Describes the type of action being performed. It's usually a string constant describing the action.
>
>payload: Contains the data associated with the action. This data can be of any type and holds the necessary information for the reducers to modify the state accordingly.
>
>
>Actions are dispatched to the Redux store using store.dispatch(action). Reducers, which are pure functions, then take these actions as input and determine how the state should change based on the action's type and payload.
>
>```
>

> # Reducer
>```
>A reducer is a pure function that specifies how the application's state changes in response to dispatched actions. It takes the current state and an action, then returns the new state. Reducers are responsible for handling specific types of actions and updating the state accordingly.
>
> The reducer function has the following characteristics:
>
>1. Pure Function: Reducers are pure functions; they produce the same output for a given input and do not modify the state directly. Given the same arguments, they should always return the same output without causing side effects.
>
>2. State Mutation: Reducers do not mutate the existing state. Instead, they create a new state object based on the changes specified by the action and return that new state.
>
>3. Switch Statements or Lookup Tables: Reducers typically use a switch statement or lookup tables to determine how the state should change based on the action type.
>```

> # Action Types
>```
> Action types are string constants that define the type of action being performed in your application. They are typically defined as variables or constants to ensure consistency across the application. These action types are dispatched along with action objects to describe the intention of the action.
>
> Defining action types as constants helps prevent potential bugs that might arise from mistyped action type strings. By centralizing these action type definitions, it becomes easier to manage and maintain actions throughout your application.
>```

> # Store
>```
>The store is a core part of Redux that holds the application state. It's a JavaScript object that contains the complete state tree of the application. The store is responsible for the following:
>
> 1. Holding Application State: The store keeps the current state of the entire application. It represents a single source of truth, making it accessible to any part of the application.
>
> 2. Allowing Access to State: Through the use of the getState() method, any part of the application can access the current state held by the store.
>
> 3. Dispatching Actions: The dispatch(action) method is used to dispatch actions to the store. When an action is dispatched, the store passes that action to the reducers, allowing the state to be updated based on the action's type and payload.
>
> 4. Registering Reducers: Reducers specify how the application's state changes in response to actions. The store is created with a root reducer, which can be a combination of multiple reducers using combineReducers().
>
> 5. Subscribing to Changes: The subscribe(listener) method allows components to subscribe to the store and receive notifications whenever the state changes. This enables components to update when relevant parts of the state change.
>```

> # Dispatch
>```
> Dispatch is a method provided by the Redux store that is used to send actions to the store. It is the only way to trigger a state change within the store. When an action is dispatched, the store passes that action to the reducers, which then determine how the state should be updated based on the action's type and payload.
>
> The dispatch function is part of the store object and is used as follows:
>
> store.dispatch(action);
>
> Note:
>
> store.dispatch and useDispatch serve a similar purpose of dispatching actions in Redux, but they are used in different contexts:
>
> 1. store.dispatch:
>
> => It's a method provided by the Redux store itself (store), used outside of React components.
>
> => It's typically used in non-React parts of the application, such as middleware, services, or any code that has access to the Redux store instance.
>
> Example:
>
> import store from './store'; // Import the Redux store
> store.dispatch({ type: 'SOME_ACTION' }); // Dispatch an action
>
> 2. useDispatch:
>
> => It's a React hook provided by the react-redux library, used specifically within functional React components.
> => useDispatch hook provides access to the dispatch function from the Redux store without explicitly connecting the component using connect.
>
> Example:
>
>import { useDispatch } from 'react-redux';
>
>const MyComponent = () => {
>  const dispatch = useDispatch();
>
>  const handleAction = () => {
>    dispatch({ type: 'SOME_ACTION' });
>  };
>
>  // ... rest of the component
>};
>
> Essentially, they both accomplish the task of dispatching actions to the Redux store, but store.dispatch is used in non-component contexts (like global state management), while useDispatch is specifically for functional components within a React-Redux application.
>```

> # Middleware
>```
> Middleware in Redux is a crucial and powerful feature that provides a way to intercept, examine, and potentially modify actions before they reach the reducers. It sits between the dispatching of an action and the moment it reaches the reducer, allowing you to apply additional logic, side effects, or transformations to the action or the state.
>
> Middleware functions form a chain, and each middleware in the chain has access to the dispatch and getState methods of the Redux store. They can perform various tasks such as:
>
> 1. Logging: Logging information about actions, current state, or other data for debugging purposes.
>
> 2. Async Operations: Handling asynchronous actions, like making HTTP requests, and dispatching new actions based on the asynchronous results.
>
> 3. Routing: Managing navigation or redirecting based on certain actions or state changes.
>
> 4. Authentication/Authorization: Checking user authentication status and controlling access based on the state.
>
>
> Middleware intercepts every action dispatched and can decide to:
>
> => Pass the action along to the next middleware in the chain.
> => Modify the action before passing it along.
> => Stop the action from reaching the reducers by not passing it along.
>
> Here's an example of how middleware is typically used in Redux:
>
> const customMiddleware = (store) => (next) => (action) => {
>   // Middleware logic can be placed here
>  console.log('Action:', action);
>
>   // Pass the action to the next middleware or reducers
>   return next(action);
> };
>
> // Apply middleware when creating the Redux store
> import { createStore, applyMiddleware } from 'redux';
> import rootReducer from './reducers'; // Import your root reducer
>
> const store = createStore(rootReducer, applyMiddleware(customMiddleware));
>
>
> In this example:
>
> => customMiddleware is a middleware function that logs the dispatched actions to the console.
> => applyMiddleware is used when creating the Redux store to apply the middleware to the store.
>
> Middleware provides a powerful mechanism to extend Redux's capabilities, enabling you to add custom logic, side effects, or transformations to actions and the state management flow.
>```
>
> # Selectors
>```
>Selectors in Redux are functions that are used to extract specific pieces of data from the Redux store state. They encapsulate the logic for retrieving data from the store, allowing for a more maintainable and centralized approach to accessing state data within components.
>
> Selectors help in abstracting the shape and structure of the state from the components, providing a consistent interface for accessing data. They enable efficient and memoized access to derived or computed data from the state.
>
> Common use cases for selectors include:
>
> 1. Extracting Data: Selectors extract specific data from the store, such as getting a list of items, retrieving user information, or fetching a part of the state tree.
>
> 2. Derived Data: Computing and returning derived data based on the state. For example, combining data from multiple parts of the state or performing calculations.
>
> 3. Memoization: Utilizing memoization techniques (such as reselect library) to efficiently cache the results of expensive computations, ensuring that selectors only recalculate their output when their inputs change.
>
> Here's an example of a simple selector:
>
>// Selector function to retrieve a specific piece of state
> const getUser = (state) => state.user;
>
> // Usage in a component
> import { useSelector } from 'react-redux';
>
> const MyComponent = () => {
>   const user = useSelector(getUser);
>
>   // Use the user data retrieved by the selector
>   // ...
> };
>
>
> In this example:
>
> => getUser is a selector function that extracts the user slice of state from the Redux store.
> => useSelector is a React-Redux hook used within functional components to select and access the Redux state using the selector function.
>
> Selectors promote code reusability, maintainability, and help in keeping the components decoupled from the structure of the state tree. They play a significant role in efficiently accessing and computing data from the Redux store, especially in larger applications with complex state structures.
>```

> # Immutable Data
> ```
> Immutable data refers to data that, once created, cannot be changed. In Redux, it's crucial to maintain immutability when updating the state. This ensures that changes to the state are made by creating new objects rather than mutating existing ones.
>```

> # Normalization
> ```
> Normalization is the process of restructuring the state to store data in a more normalized form, especially beneficial for handling relational data. It involves organizing data into a normalized shape, reducing redundancy, and optimizing state updates.
>```

> # Higher-Order Reducer
> ```
> Higher-Order Reducers are functions that take in other reducers as arguments and return a new reducer. They are used for splitting reducers into smaller, more manageable units, allowing better organization and modularity of the state logic.
>```