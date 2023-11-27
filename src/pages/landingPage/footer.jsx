import React from "react";
import Logo from "../../images/img/logoFooter.png";

export default function footer() {
  return (
    <div className="mt-14 p-10 flex flex-col items-center justify-center ">
      <div className="h-32 w-full flex items-center justify-center ">
        <img src={Logo} alt="logo" className="h-40 w-52 laptop:block hidden" />
        <div className="flex items-center justify-center gap-6">
          <p className="footerBooksTxt laptop:text-7xl text-3xl">BOOKS</p>
          <p className="footerHavenTxt laptop:text-7xl text-3xl">HAVEN</p>
        </div>
      </div>
      <p className="text-xs text-slate-500 font-extralight w-full text-center">
        © Copyright 2023 Books Haven
      </p>
    </div>
  );
}
