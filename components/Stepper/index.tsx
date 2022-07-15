import {useState, FC} from "react";

type TStepperProps = {
  initial?: number;
  onChange?: (count: number) => void;
};

export const Stepper: FC<TStepperProps> = ({
                                             initial = 0, onChange = (count) => {

  }
                                           }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    onChange(newCount)
  }

  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    onChange(newCount)
  }

  return (
    <div>
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={increment}>
        +
      </button>
    </div>
  )
}
