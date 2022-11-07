import React from 'react'
import { useLocation } from 'react-router-dom';

const Workspace = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>Workpace</div>
  )
}

export default Workspace