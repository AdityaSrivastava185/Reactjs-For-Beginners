import React, { useRef, useState } from "react";
import Card from "./Card";


function Foreground() {
  const ref = useRef(null);
  const data = [
    {
    description : "This is the card one of the docs project",
    filesize: "0.9 MB" ,
    close : false,
    tagdetails :{
      isopen : true,
      tagtitle : "Download Now ",
      tagColor : "green"
    }
    },
    {
    description : "This is the card one of the docs project",
    filesize: "0.9 MB" ,
    close : false,
    tagdetails :{
      isopen : false,
      tagtitle : "Download Now ",
      tagColor : "green"
    }
    },
    {
    description : "This is the card one of the docs project",
    filesize: "0.9 MB" ,
    close : false,
    tagdetails :{
      isopen : true,
      tagtitle : "Download Now ",
      tagColor : "green"
    }
    },
    {
    description : "This is the card one of the docs project",
    filesize: "0.9 MB" ,
    close : false,
    tagdetails :{
      isopen : true,
      tagtitle : "Download Now ",
      tagColor : "green"
    }
    },
    {
    description : "This is the card one of the docs project",
    filesize: "0.9 MB" ,
    close : false,
    tagdetails :{
      isopen : true,
      tagtitle : "Download Now ",
      tagColor : "green"
    }
    },
  ]
  return (
  <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap">
    {data.map((items,index)=>(
      <Card data={items} reference = {ref}/>
    ))}
  </div>
  )
}

export default Foreground;
