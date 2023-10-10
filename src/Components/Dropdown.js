import React from 'react'
import "./dropdown.css"

const Dropdown = () => {
const[open,setOpen] = React.useState(false);

const handleOpen = () => {
    setOpen(!open);
};
    return (
    <div>
         <p className="addtext">Add a node</p>
 <div className="dropcontainer">
  <button onClick={handleOpen} className="dropbtn">Select type of node</button>
  {open ? <div id="myDropdown" className="dropdown-content">
    <a href="">Link 1</a>
    <a href="">Link 2</a>
    <a href="">Link 3</a>
    
  </div>: <p></p>}
</div>

<button className="Submit1" type="Submit1">Submit</button>


<div>
    <p className="nodetext">Node value</p>
</div>
<div>

    <input type="text" className="input1" id="" />
</div>
<div>
<button className="submit2" type="submit">Add Node</button>
</div>
</div>
  )
}

export default Dropdown;
