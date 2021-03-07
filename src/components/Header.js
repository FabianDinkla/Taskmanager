import React from 'react'

const Header = () => {
    return (
        <div className="container" style={headerStyle}>
            <h1 className="site-title" style={{color:'black', fontSize:'22px', margin:'auto'}}>Task Manager</h1>
        </div>
    )
}

const headerStyle = {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin: 'auto',
    padding:'auto',
    width:'70vw',
    height:'50px',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '2px solid black',
};

export default Header
