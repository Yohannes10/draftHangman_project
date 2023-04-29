

import React from 'react'

const TestingWords = ({items = []}) => {
 if (items .length <= 0){
    return <div>No items Found </div>
 }

 else { return <div>
       {items.map((items,index)=> {
            return <h4> {items}</h4>
        })}
    </div>
 }
}

export default TestingWords


// let words = [
//     "Free State"   ,
//     "Gauteng"   ,
//     "KwaZulu-Natal"  , 
//     "Limpopo",
//     "Mpumalanga"   ,
//     "Northern Cape" , 
//     "North West" ,
//     "Eastern Cape",
//     "Westrn Cape",
//     ];
    
//     function reactWords() {
    
      
//       return words[Math.floor(Math.random() * words.length)];
//     }
    
//     export { reactWords };
    