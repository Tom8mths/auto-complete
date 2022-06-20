Q: What is the difference between Component and PureComponent? give an
example where it might break my app.

A: In a PureComponent you can handle shouldComponentUpdate methods. It can break. It can  break the app using it with Context 

Q: Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

A: 

Q: Describe 3 ways to pass information from a component to its PARENT.

A: 1. Passing a setState to the children as a prop where it can change it and pass to parent.
2. Passing a function to the child as a prop, and the child component can interact with it passing params.

Q: Give 2 ways to prevent components from re-rendering.

A: One way we can do this is to use shouldComponentUpdate passing a condition if it needs to re-render. The other way is to use React.memo(). What this does is, before react renders your component, it check if the result is the same as the previous render.

Q: What is a fragment and why do we need it? Give an example where it might
break my app.

A: Fragment is used to group multiples elements inside a component. A component might break if you try to render it with multiples elements separated, so you use the fragment to fix that, and in the end it will become a div.

Q: Give 3 examples of the HOC pattern.

A: It is like High order function, where it takes a component and return a new one. For exemple, if I have a component called ComponentA and I want it to show only for admin, I will make a HOC that will check the user's role and depending on the result it will render a new component.

Q: what's the difference in handling exceptions in promises, callbacks and
async...await.

A: Exceptions in promises we can use the handlers then/catch, where it is like a chain reaction handling the exception. Async await we get the result in the same block and Callback we send the result to another function 

Q: How many arguments does setState take and why is it async.

A: It has two arguments and it is async because it let us to have multiple calls to setState in the same scope and not need to render repeatedly

Q: List the steps needed to migrate a Class to Function Component.

A: When changing from Class to Function Component, the first thing to do is very simple, just like the name says, you need to covert class to function, so the render method is just the return value of the function.
So all the methods needs to change to function.
Remove all the lifecycle methods and replace it with useEffect hooks.
In a function component the constructor wont be used, so we will use the useState hook instead. 

Q: List a few ways styles can be used with components.

A: You can use CSS Modules, CSS Stylesheet or Styled-components. Although I'm more used to CSS modules, I personaly prefer using styled-components, which I based my stylization in this project.

Q: How to render an HTML string coming from the server.

A: There are two ways o rendering it. Using dangerouslySetInnerHTML on the html element. Or using plugins that can deal with this kind of situation.