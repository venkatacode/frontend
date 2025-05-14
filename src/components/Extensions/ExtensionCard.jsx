import axios from "axios";
import React, { useEffect, useState } from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { useNavigate } from "react-router-dom";

const ExtensionCard = () => {
  const [extensions, setExtensions] = useState([]);
  const [darkMode, setdarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchextensions = async () => {
      const res = await axios.get("http://localhost:4000/extensions");
      setExtensions(res.data);  
    };
    fetchextensions();
  }, []);

  
  const deleteExtensions=async(id)=>{
    try{
     await axios.delete(`http://localhost:4000/extensions/${id}`)
      setExtensions((prev=>prev.filter(ext=>ext.id!==id)))
    }catch(err){
      console.log(err);
    }
  }
 
  const handleToggle = (id) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id ? {...ext,isActive:!ext.isActive}:ext
      )
    );
  };
  
  const filteredExtensions = extensions.filter(ext => {
    if (filter === 'Active') return ext.isActive
    if (filter === 'Inactive') return !ext.isActive
    return true; 
  });
  
  return (
    <>
      <div   style={{
    border: "1px solid black",
    borderRadius: "8px",   
    overflow: "hidden",
    maxHeight:"70px"
  }}>
        <nav className="navbar"   style={{
       backgroundColor: darkMode ? "#483e4b" : "#ffffff",
          padding: "0.75rem 1rem",
    }} >
          <div className="container">
          <img className="navbar-brand" src="./src/assets/images/logo.svg" alt="extensions" />
          <ThemeSelector darkMode={darkMode} setdarkMode={setdarkMode} />
          </div>
        </nav>
      </div>
      <div className="d-flex justify-content-end gap-2 flex-wrap mt-2" >
        <button
          className="btn btn-outline-danger rounded-pill"
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-outline-danger  rounded-pill"
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
        <button
          className="btn btn-outline-danger rounded-pill"
          onClick={() => setFilter("Inactive")}
        >
          InActive
        </button>
      </div>
      <div className="d-flex justify-center flex-wrap gap-4 mt-3">
        {filteredExtensions.map((ext) => (
            <div
              key={ext.id}
              className="card"
           style={{
              backgroundColor: darkMode ? "#483e4b" : "#f8f9fa",
              color: darkMode ? "#ffffff" : "#483e4b",
              border:"1px solid black",
            }}
          >
            <div className="card-content d-flex flex-row align-items-center">
              <img
                src={ext.logo}
                alt="logo"
                className="card-image"
                width="60px"
              />
              <div className="p-4">
                <h4 className="card-title">{ext.name}</h4>
                <p className="card-description">{ext.description}</p>
                <div className="d-flex gap-5">
                  <button className="btn btn-outline-danger  rounded-pill" onClick={()=>deleteExtensions(ext.id)}>Remove</button>
                  <div className="form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={`switch-${ext.id}`}
                      checked={ext.isActive}
                      onChange={() => handleToggle(ext.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExtensionCard;



