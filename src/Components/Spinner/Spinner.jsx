import React from 'react';
import { trefoil } from 'ldrs'
export default function Spinner() {
  trefoil.register()
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-black d-flex flex-column justify-content-center align-items-center z-3">
      <l-trefoil
  size="50"
  stroke="4"
  stroke-length="0.15"
  bg-opacity="0.1"
  speed="1.4" 
  color="rgba(201, 169, 63, 0.87)" 
></l-trefoil>
    </div>
  );
}



