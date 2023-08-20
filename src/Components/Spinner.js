import React from "react";
import Loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-2">
      <img src={Loading} width="70px" height="70px" alt="Loading" />
    </div>
  );
};

export default Spinner;
