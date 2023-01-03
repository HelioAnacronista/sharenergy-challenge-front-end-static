import React, { useState } from 'react';

type Props = {
   code : any
}

export default function ImageCat({code}: Props) {

   

   const baseURL = "https://http.cat/"


  return (
    <img src={baseURL+ String(code)} alt="" />
    
  )

  
}
