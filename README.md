# Components in my food ordering app

Main sections: 
- Header
    - Logo
    - Menu (ul list)
      
- Body
    - Restaurant Cards -> Restaurant Card
    - Search bar
- Footer
    - Copyright
    - Links
    - Address
    - Contact


What are the basics you should know:
- Creating components
- Rendering one component inside another.
- Rendering js inside jsx code
- Passing props from one component to another component.

Config-Driven UI
- Will be a different website for Delhi, Chandigarh, Bangalore?
  No right! Our website is driven by data. This data is given by the backend

It is important to give keys to the components while rendering in order to uniquely identify them.


# React Hooks

- We need React Hooks to make our website dynamic.
- They are normal JS functions.
- useState() and useEffect() are most common React Hooks.

- useState() -> Used to generate super powerful React variable

# How to import hooks 

- They are contained inside the React library that we import.
- import {useState} from React

Using the useState hook, whenever the set function sets the value of local react state variable, then React re-renders the component

React is very fast with manipulation of DOM. It makes react faster while building large scale production-ready applications.

React keeps the UI layer sink with the data layer.

# Reconciliation Theorem (React Fiber)

React maintains the virtual DOM of the actual DOM tree. 
Virtual DOM is the representation of the actual DOM.

DOM is basically a hierarchy of HTML Tags.

# Diff Algorithm

- It finds out the diff between the previous virtal DOM and the current/new virtual DOM.
- It will calculate the diff and update the actual DOM with the new virtual DOM.
- Find the diff and update the DOM.
- This is what happens on every render cycle.
- Virtual DOM is like object-representation of the actual DOM. 
- Comparing two objects is faster than comparing two HTML tags.
- React is most popular UI library because of its fast DOM manipulation.

# useEffect hook:

If there is a local state variable in the dependency array, then the useEffect callback will be called when the value of that local state variable changes.

# Higher Order Components

Higher order component is a function that enhances a component. 
In the Input, we give a component, and it returns the enhanced component.