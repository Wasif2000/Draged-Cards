import React from 'react';
import Draggable from 'react-draggable';
import { motion } from "framer-motion"

const DragCompo = ({ data }) => {
  return (
    <>
      
        <Draggable >
          <motion.div  className="rounded-[30px] shadow-lg w-60 cursor-move h-[250px] flex flex-col justify-between bg-transparent">
            <div className='p-4 '>
              <h1 className="text-xl font-bold text-white">{data.title}</h1>
              <p className="mt-2 text-sm text-zinc-500">{data.paragraph}</p>
            </div>

            {/* Footer */}
            <span className="h-8 bg-green-600 w-full flex items-center justify-center rounded-b-[30px] text-white">
              {data.footer}
            </span>
          </motion.div>
        </Draggable>
      
    </>
  );
};

export default DragCompo;
