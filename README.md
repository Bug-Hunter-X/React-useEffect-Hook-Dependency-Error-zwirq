# React useEffect Hook Dependency Error
This repository demonstrates a common error when using the `useEffect` hook in React: forgetting to include necessary dependencies in the dependency array.  This can lead to unexpected behavior and potentially infinite loops.

## The Bug
The provided `bug.js` file demonstrates incorrect usage of the `useEffect` hook. The `useEffect` function will run after every render, even if the `count` state hasn't changed, which causes an infinite loop and logs an unexpected number of times to the console.  The cleanup function is called only once after the first render.

## The Solution
The `bugSolution.js` file shows the corrected code. By adding `count` to the dependency array, `useEffect` only runs when `count` changes.