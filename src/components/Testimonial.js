import React, { useState } from 'react'
import Card from './Card'

const Testimonial = (props) => {
    let reviews = props.reviews
    const [index, setIndex] = useState(0);

     function leftShiftHandler() {
        if(index-1 < 0) {
            setIndex(reviews.length - 1);
        }
       
        else{
            setIndex(index - 1); 
        }
     }

     function rightShiftHandler() {
       if(index + 1 >= reviews.length) {
        setIndex(0);
       }

       else {
        setIndex(index+1);
       }
        
     }


     function surpriseHandler(){
       let randomIndex = Math.floor(Math.random() * reviews.length)
        console.log(randomIndex)
        setIndex(randomIndex)


     }



  return (
    <div>
        <Card review = {reviews[index]} />
        <div>

<button
 onClick={leftShiftHandler}
 className="text-violet-400 mx-auto mt-5 font-bold text-2xl mr-8"> 
 +
</button>

<button
 onClick={rightShiftHandler}
 className="text-violet-400 mx-auto mt-5 font-bold text-2xl"> 
 -
</button>

</div>  

<div>
<button
onClick={surpriseHandler}
 className="bg-violet-400 cursor-pointer px-10 py-2 rounded-md font-bold text-white mt-8 text-lg">
    Surprise Me
</button>
</div>
  
    </div>
  )
}


export default Testimonial