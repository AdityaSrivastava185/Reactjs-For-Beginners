import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion"

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints = {reference} className="px-8 py-10 flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.description}. 
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between
        mb-5 px-8 py-3">
          <h5>{data.filesize}</h5>
         <span className="w-7 h-7 rounded-full flex items-center justify-center ">
          {data.close ? "close" : <FaDownload size="0.8em"/>}
         </span>
        </div>
        {
          data.tagdetails.isopen ? ( <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-md font-semibold">{data.tagdetails.tagtitle}</h3>
        </div> ) : null
        }
        
      </div>
    </motion.div>
  );
}

export default Card;
