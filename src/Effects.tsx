import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react'

export function Effects(props: { sourceId: string }) {
  const [lastMessage, setMessage] = useState(-1);

  const callback = (message) => {
    setMessage(message);
  }
  
  useEffect(() => {
    subscribe(props.sourceId, callback);
    return () => {
      unsubscribe(props.sourceId,callback);
      setMessage(-1);
    };
  },[props.sourceId]);

  return <div>{props.sourceId}: {lastMessage}</div>;
}
