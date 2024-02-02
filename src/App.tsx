// import { Counter } from "./components/Counter"
// import Heading from "./components/Heading"
// import { Section } from "./components/Section"
// import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from "react";
import Counter from "./components/Counter";
// import { List } from "./components/List";
import { CounterProvider, initState } from "./context/CounterContext";

// interface User{
//   id: number,
//   username: string
// }

// type FibFunc = (n: number) => number
// const fib: FibFunc = (n) => {
//   if (n < 2) return n
//   return fib(n - 1) + fib(n-2)
// }
// const myNum: number = 37;
function App() {
  // const [count, setCount] = useState<number>(0)
  // const [users, setUsers] = useState<User[] | null>(null)
  // const inputRef = useRef<HTMLInputElement>(null)
  // // if(!inputRef.current)
  // console.log(inputRef?.current)
  // console.log(inputRef?.current?.value)

  // useEffect(() => {
  //   console.log("Mounting")
  //   return () => console.log("unmounting")
  //   console.log("Users: ", users)
  // }, [users])
  // const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), []);
  // const result = useMemo<number>(()=> fib(myNum), [])
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" name="" ref={inputRef} id="" /> */}
      {/* <Heading title="Hello world!" />
      <Section title="Changed Heading"><h5>Content</h5></Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "👨‍💻 Code"]} render={(item: string) => <span className="gold bold">{item}</span>} /> */}
      <CounterProvider count ={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App
