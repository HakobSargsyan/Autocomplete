## 1. What is the difference between Component and PureComponent?

A Component is the basic way to define React components. When the parent component re-renders, its child components also re-render by default. To optimize performance, we need to manually implement `shouldComponentUpdate` to control unnecessary re-renders.

A PureComponent, on the other hand, comes with a built-in `shouldComponentUpdate` that performs a shallow comparison of props and state. This means it only checks if the references have changed, not the deep values inside objects.

While PureComponent helps optimize rendering, it can cause issues if used incorrectly. For example, if we update an object like this:

```js
this.product.title = "Test 2";
this.setState({ product: this.product });
```

Since the reference to `this.product` remains the same, PureComponent will not detect the change, causing the UI to not update as expected.

Therefore, PureComponent should be avoided for complex nested states where object properties change without updating the reference. But for simple state updates, it is a good optimization choice.

---

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

Using `shouldComponentUpdate` with React Context can be dangerous because context updates do not respect `shouldComponentUpdate`.

When `shouldComponentUpdate` returns `false`, React skips re-rendering the component, but its children may still update if they consume context directly.

This can lead to UI inconsistencies, where the parent component remains stuck with outdated props or state while the children receive updated context values. As a result, the UI may display stale or incorrect data.

---

## 3. Describe 3 ways to pass information from a component to its PARENT.

1. **Using a Parent Callback** – The parent passes a function as a prop to the child, and the child calls it with data to send information back.
2. **Using Context State** – A shared context is created, allowing both the parent and child to access and update the same state.
3. **Using a State Management Library (Redux, Zustand)** – A global store manages state, enabling communication between components without prop drilling.

---

## 4. Give 2 ways to prevent components from re-rendering.

1. Using `React.memo()` to prevent unnecessary renders.
2. Using `shouldComponentUpdate()` (for Class Components) or `PureComponent`.

---

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A **Fragment** is a wrapper used for grouping multiple elements without adding extra nodes to the DOM.

In React, components must return a single parent element. If multiple elements are returned without a Fragment or another wrapper, it will cause an error.

Fragments keep the DOM clean because they do not add extra elements like a `<div>`.

---

## 6. Give 3 examples of the HOC pattern.

### **1. Authentication HOC** (Protecting Private Routes)

```jsx
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("token"); // Example auth check
    return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/login" />;
  };
};

const Dashboard = () => <h1>Welcome to Dashboard</h1>;
export default withAuth(Dashboard);
```

### **2. Data Fetching HOC**

```jsx
import { useEffect, useState } from "react";

const withDataFetching = (url) => (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    return data ? <WrappedComponent {...props} data={data} /> : <p>Loading...</p>;
  };
};

const UserList = ({ data }) => (
  <ul>{data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
);
export default withDataFetching("https://jsonplaceholder.typicode.com/users")(UserList);
```

### **3. HOC Adding Extra Props**

```jsx
const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { message: "Hello!" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};

const EnhancedComponent = withExtraProps(MyComponent);
```

---

## 7. What's the difference in handling exceptions in promises, callbacks, and async/await?

- **Async/Await:** Uses `try-catch` for error handling.
- **Promises:** Uses `.then().catch()` for error handling.
- **Callbacks:** The error is the first function parameter, and we need to manually check `err` in the callback function.

---

## 8. How many arguments does setState take and why is it async?

Class components' `setState` takes two arguments:
1. An **updater** (object or function)
2. An **optional callback** that runs after the state update.

Example:

```jsx
this.setState({ count: this.state.count + 1 }, () => {
  console.log("State has been updated:", this.state.count);
});
```

`setState` is asynchronous for performance reasons. React **batches multiple state updates** to optimize re-renders instead of updating the component on every call.

```jsx
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
```

React will merge these updates and re-render only once.

---

## 9. List the steps needed to migrate a Class to Function Component.

1. Convert the class to a function.
2. Replace `this.state` with `useState`.
3. Replace lifecycle methods with `useEffect`.
4. Convert class methods to functions.
5. Handle props directly in the function component.
6. Refactor context usage with `useContext`.
7. Refactor refs with `useRef`.

---

## 10. List a few ways styles can be used with components.

- **Inline Styles** (`style` prop)
- **CSS Stylesheets** (Regular `.css` file)
- **CSS Modules** (`.module.css`)
- **Styled Components**
- **MUI, Tailwind CSS**

---

## 11. How to render an HTML string coming from the server?

- **Using `dangerouslySetInnerHTML`** (⚠️ Risk of XSS attacks)
- **Sanitizing HTML Before Rendering** (Using libraries like `dompurify` to prevent XSS attacks)

