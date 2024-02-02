import { ReactNode } from 'react'
import { useCounter, useCounterText } from '../context/CounterContext'

// type CounterProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>,
//   children: ReactNode
// }
// export const Counter = ({setCount, children}: CounterProps) => {
//   return (
//     <>
//       <h1>{children}</h1>
//       <button onClick={()=> setCount(prev=> prev+1)}>+</button>
//       <button onClick={()=> setCount(prev=> prev-1)}>-</button>
//     </>
//   )
// }




type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  const { count, increment, decrement } = useCounter()
  const {text, handleTextInput}= useCounterText()

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{text}</h2>
      </div>
    </>
  )
}
export default Counter