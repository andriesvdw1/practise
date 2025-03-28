import { useState } from 'react';
const BoxCard = ({result, children}) => {
    const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
    <div className={`box_${result}`}>{children}<button onClick={() => setShow(!show)} className="trigger">Hide</button></div>
    
    </div>
  )
}

export default BoxCard