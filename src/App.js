import React from 'react';
import DragCompo from './DraggCards/DragCompo';

const App = () => {
  const data = [
    {
      title: "Wasif Ali",
      paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, eaque. Officia accusamus voluptatum dicta.",
      footer: "Open"
    },
    {
      title: "ahsan sarfraz",
      paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, eaque. Officia accusamus voluptatum dicta.",
      footer: "closed"
    },
    {
      title: "asad ali",
      paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, eaque. Officia accusamus voluptatum dicta.",
      footer: "nothing happens"
    },
  ];

  return (
    <>
      <div className="h-screen bg-zinc-800 relative">
        {/* Centered text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-zinc-900 text-[80px] font-bold capitalize">wasif ali.</h1>
        </div>

        {/* Pass the entire data array to DragCompo */}
        <div className='flex gap-5 p-8'>
          {data.map((item, index) => (
            <DragCompo key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
