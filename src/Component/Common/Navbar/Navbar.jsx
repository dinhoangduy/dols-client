import React from 'react'

const Navbar = () => {
  return (
    <div
        style={{
            height: "80px",
            backgroundColor:"#ddd",
            display: "flex",

        }}
    >   
    
        <select>
            <option value="">Workspace 1</option>
            <option value="">Workspace 2</option>
        </select>

    </div>
  )
}

export default Navbar