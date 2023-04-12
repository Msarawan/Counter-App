import { FC } from 'react';
import { Button } from '@patternfly/react-core';

type CounterProps = {
    count : number;
    incrementCount: () => void;
    decrementCount : () => void;
  }

const Counter: FC <CounterProps> = ({count,incrementCount,decrementCount}) => {
  return (
    <div>
      <h1 className='counter'>Count - {count}</h1>
      <Button variant="primary" onClick={incrementCount} className='incButton'>Increment</Button>
      <Button variant="primary" onClick={decrementCount} className='decButton'>Decrement</Button>
    </div>
  )
}

export default Counter
