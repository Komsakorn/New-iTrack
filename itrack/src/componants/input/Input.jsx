import React from 'react';

import './Input.css';

const Input = ({isInvalid = false, ...props}) => {
  return <>  
          <input class={isInvalid ? 'error' : ''} {...props} />
          {isInvalid && <div class='error-text'>Email is invalid</div>}
         </>;
}

export default Input;