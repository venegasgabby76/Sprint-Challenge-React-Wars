# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces(created by facebook). react helps solve the problem of long DOM renders, essentially react tells the virtual DOM which element and state to render to the actual dom and it does it on its own. It will "react" when the state in our app is changed.

1. Describe component state.

Component state is an object that determines how that component renders and behaves. "State" is what allows us to create components that are dynamic and interactive.

1. Describe props.

Props/prioperties are used to pass data from one component to another. data from the parent shouldnt be changed by the child component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are anything that affects something outside of the scope of the function being executed. we can use hook effects like useEffect(). 
