import React, { use } from 'react'
import './intro.css'
import {useNavigate} from 'react-router-dom';
const Intro = () => {
  const Navigate=useNavigate();
  return (
    <div className="link-container">
      <div><a href='https://www.geeksforgeeks.org/reactjs/reactjs-introduction/' target='_blank'>Introduction to React</a></div>   
      <div><a href='https://webpack.js.org/concepts/hot-module-replacement/' target='_blank'>HMR (hot reloading)</a></div>
      <div><a href='https://react.dev/learn' target='_blank'>React documentation</a></div>
      <div><a href='https://react.dev/learn/what-is-react' target='_blank'>What is React?</a></div>
      <div><a href='https://react.dev/learn/why-react' target='_blank'>Why React?</a></div>
      <div><a href='https://react.dev/learn/what-are-components' target='_blank'>What are components?</a></div>
      <div><a href='https://webpack.js.org/concepts/hot-module-replacement/' target='_blank'>Source Map in React</a></div>
      <div><a href='https://www.geeksforgeeks.org/reactjs/reactjs-reactdom/' target='_blank'>React DOM</a></div>
      <div><a href="https://parceljs.org/" target="_blank">Parcel</a></div>
      <div><a href="https://www.geeksforgeeks.org/reactjs/reactjs-virtual-dom/" target="_blank">Virtual DOM</a></div>
      <div><a href="https://www.geeksforgeeks.org/reactjs/reactjs-application-structure/" target="_blank">React Application Structure</a></div>
      <div><a href="https://www.geeksforgeeks.org/reactjs/reactjs-babel-introduction/" target="_blank">Babel in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/handling-events.html" target="_blank">Handling Events in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/forms.html" target="_blank">Forms in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/lifting-state-up.html" target="_blank">Lifting State Up</a></div>
      <div><a href="https://legacy.reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/conditional-rendering.html" target="_blank">Conditional Rendering</a></div>
      <div><a href="https://legacy.reactjs.org/docs/refs-and-the-dom.html" target="_blank">Refs and the DOM</a></div>
      <div><a href="https://www.geeksforgeeks.org/reactjs/explain-new-context-api-in-react/" target="_blank">Context API in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/portals.html" target="_blank">Portals in React</a></div>
      <div><a href="https://legacy.reactjs.org/docs/error-boundaries.html" target="_blank">Error Boundaries</a></div>
      <div><a href="https://legacy.reactjs.org/docs/code-splitting.html" target="_blank">Code Splitting</a></div>
      <div><a href="https://legacy.reactjs.org/docs/react-api.html" target="_blank">React API</a></div>
      <div><a href="https://www.geeksforgeeks.org/blogs/differences-between-functional-components-and-class-components/" target="_blank">class component vs functional component</a></div>
      <div><a href="https://www.geeksforgeeks.org/reactjs/reactjs-hooks/" target="_blank">hooks in react </a></div>
      <div><a href="https://www.w3schools.com/react/react_hooks.asp" target="_blank">hooks in depth</a></div>
      <div><a href='https://github.com/sudheerj/reactjs-interview-questions/tree/master?tab=readme-ov-file' target='blank'>interview Notes </a></div>
      <div onClick={()=>{
        Navigate('/notes')
      }}><a>Notes</a></div>
      <div onClick={()=>{
        Navigate('/projects')
      }}><a>Projects</a></div>

    </div>
  )
}

export default Intro
