import React from 'react';
import Logo from "../../images/img/logo.png";

export default function header() {
  return (
    <div className="h-32 w-full flex items-center justify-center bg-white">
      <img src={Logo} alt='logo' className="h-32 w-32" />
    </div>
  )
}
