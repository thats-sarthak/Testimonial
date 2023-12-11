import React from 'react'


const Card = (props) => {
    let review = props.review
    
  return (
    <div className="flex flex-col md:relative" >

        <div className="absolute mt-[-7rem] mx-auto z-[1]">
            <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" 
            src = {review.image} />
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]">
             </div>
        </div>

        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize">{review.name}</p>
        </div>

        <div className="text-center mt-7">
            <p className="text-violet-300 uppercase text-sm">{review.job}</p>
        </div>

        <div>
            <p className="text-violet-400 mx-auto mt-5 font-bold text-2xl"> " </p>
        </div>

        <div className="text-center mt-4 text-slate-500 ">
            <p>{review.text}</p>
        </div>

        <div>
            <p className="text-violet-400 mx-auto mt-5 font-bold text-2xl"> " </p>
        </div>

       
    </div>
  )
}

export default Card