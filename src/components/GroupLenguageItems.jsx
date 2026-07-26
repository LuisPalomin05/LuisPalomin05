import React from 'react';
import BoxLenguageItem from './BoxLenguageItem'

const GroupLenguageItems = ({titleGroup}) => {
  return (
    <div>
      <p>
        {titleGroup}
      </p>
      <div>
        <BoxLenguageItem ></BoxLenguageItem>
      </div>
      
      
    </div>
  )
}

export default GroupLenguageItems