import { FC } from 'react';
import { Button, TextContent,Text,TextVariants, } from '@patternfly/react-core';

type CounterProps = {
    count : number;
    incrementCount: () => void;
    decrementCount : () => void;
  }

const Counter: FC <CounterProps> = ({count,incrementCount,decrementCount}) => {
  return (
    <div>
      <TextContent>
        <Text component={TextVariants.h1}>
           Count - {count}
        </Text>
      </TextContent>
      <br/>
      <Button variant="primary" onClick={incrementCount}>Increment</Button>{' '}
      <Button variant="primary" onClick={decrementCount}>Decrement</Button>
    </div>
  )
}

export default Counter
