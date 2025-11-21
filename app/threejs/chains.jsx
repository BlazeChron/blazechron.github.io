'use client';
import { useEffect } from 'react';

export default function ChainScene({ onReady }) {
  useEffect(() => {
    import ('./main.js').then(({ initOpening }) => {
      initOpening(onReady);
    });
  }, [onReady]);

  return (<canvas
            id="c"
            style={{ width: '100%', height: '100%', display: 'block', zIndex: 1, left: 0, top: 0, position: 'absolute'}}
          />
          );
}
