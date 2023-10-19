import React from "react";
import Header from "../Layout/Header";

const Blog = () => {
  return (
    <div>
      <Header>Blog </Header>
      <div className="mx-16 mt-8 items-center">
        <div className="border-2 p-3 rounded-md mt-4">
          <div className="pb-2">
            <strong>Qus-1: </strong> When should we use context API?
          </div>
          <div>
            <strong>Ans: </strong> To manage and share state and data throughout
            in React we use Context API. Its particularly useful in situations
            where there have many data or state that many components in the
            application need access.
            <br />
            <ul className="pl-6">
              <li className="list-disc">Global State Management</li>
              <li className="list-disc">Authentication</li>
              <li className="list-disc">Redux-like State Management</li>
              <li className="list-disc">Navigation</li>
              <li className="list-disc">Theming</li>
              <li className="list-disc">User Preferences</li>
            </ul>
          </div>
        </div>

        <div className="border-2 p-3 rounded-md mt-4">
          <div className="pb-2">
            <strong>Qus-2: </strong> What is custom Hook?
          </div>
          <div>
            <strong>Ans: </strong> A custom hook in React is a JavaScript
            function that allows you to encapsulate and reuse logic and stateful
            behavior in functional components. Custom hooks are a core concept
            in React, and they make it easier to organize and manage complex
            logic and state in a reusable and composable manner. Some key
            characteristics and benefits of custom hooks:
            <br />
            <ul className="pl-6">
              <li className="list-disc">
                Custom hooks allow you to package and reuse functionality across
                multiple components. This promotes code reusability and reduces
                redundancy in your codebase.
              </li>
              <li className="list-disc">
                You can encapsulate complex logic, side effects, or state
                management within a custom hook, making your components cleaner
                and easier to understand.
              </li>
              <li className="list-disc">
                Custom hooks enable you to separate different concerns within
                your components. For example, you can have a custom hook for
                data fetching, another for form handling, and yet another for
                managing local component state.
              </li>
              <li className="list-disc">
                You can combine multiple custom hooks in a single component to
                compose complex behavior. This promotes a more modular and
                maintainable code structure.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-2 p-3 rounded-md mt-4">
          <div className="pb-2">
            <strong>Qus-3: </strong> What is{" "}
            <span className="font-mono font-bold">useRef()</span>,{" "}
            <span className="font-mono font-bold">useMemo()</span>
          </div>
          <div>
            <strong>Ans: </strong> useRef() and useMemo() are two important
            hooks provided by React for handling specific scenarios in
            functional components.
            <br />
            <ul className="pl-6">
              <li className="list-disc">
                useRef(): useRef() is primarily used for accessing and
                interacting with DOM elements, as well as for persisting values
                across renders without causing re-renders. It returns a mutable
                ref object with a .current property that can hold a reference to
                a DOM element or any other value you want to persist between
                renders.
              </li>
              <li className="list-disc">
                useMemo(): useMemo() is used for memoizing expensive
                calculations or functions, preventing them from being recomputed
                on every render. It takes two arguments: a function and an array
                of dependencies. The function is only re-executed when one of
                the dependencies changes. This is particularly useful when you
                want to optimize the performance of your components by avoiding
                unnecessary computations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
