import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className='row main-header'>
        <div className='col-4 header-text border-right'>
          <p className="font-weight-bold">Oiling you up since 1986.</p>
          <p className="text-lead">Pierre's Automotive carries a wide variety of automotive oils.
          Click on the oil name in the list on the left to see a detailed view.</p>
        </div>
        <div className='col-8'>
         <h1 className="display-4"> Pierre's Automotive</h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;