import React, { useEffect, useState } from 'react'

const ThemeSelector = ({darkMode,setdarkMode}) => {
        const handleToggle = () => {
            setdarkMode(prev => !prev);
          };
          useEffect(() => {
            document.body.style.backgroundColor = darkMode ? '#483e4b' : '#ffffff';
          }, [darkMode]);
  return (
    <div className='form-switch mb-3 '>
         <label htmlFor="color">
            {darkMode ?
             (<div className='rounded bg-light'>
              <button className="btn btn-outline-dark" onClick={handleToggle}><img src='./src/assets/images/icon-moon.svg' alt="DarkMode"/></button>
              
             </div>)
          :
          (<div className='rounded bg-dark'>
            <button className="btn btn-outline-dark"onClick={handleToggle}><img src='./src/assets/images/icon-sun.svg' alt="LightMode"/>
            </button>
          </div> )
          }
            </label>
         </div>
        
       
  )
}

export default ThemeSelector