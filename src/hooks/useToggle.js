/*******************************************
  Hover Hook ( custom hook )
*******************************************/
import React from 'react';
export default function useToggle() {
  
  const [toggling, setToggling] = React.useState(false)
  const onMouseClick = () => setToggling(prevState => !prevState)
  
  const attrs = {
    onClick: onMouseClick,
  }
  
  return [toggling, attrs]
}