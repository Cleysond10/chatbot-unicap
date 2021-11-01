import React from 'react';

const ButtonComponent = (({children})=>{
  return(
    <button>
      {children}
    </button>
  )
});

export default ButtonComponent;