import React from "react";
import { Link } from "react-router-dom";




function BasicNav() {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
        <Link className="navbar-brand" to="/">
          Quarantivities
        </Link>
        </div>
        
      </nav>
    )
}

export default BasicNav;