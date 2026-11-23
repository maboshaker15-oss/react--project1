import React from "react";
function Cart({allData}){
     return(
        <div>
           {allData.map(function(result){
            if (result.id>2){
                 return(
                <div key={result.id}>
                    <h2>my name is:{result.firstName}{result.lastName}</h2>
                    <h2>my color is:{result.color}</h2>
                    <h4>my id is:{result.id}</h4>
                </div>
            );
           }
           else if (result.id==1){
            return(
                <h2>hii</h2>
            );
           }
           else{
            return(
                <h2>not in range</h2>
            );
           }
           return result.id>2?(
            <div>
             <h2>my name is:{result.firstName}{result.lastName}</h2>
             <h2>my color is:{result.color}</h2>
             <h4>my id is:{result.id}</h4>
            </div>
           ):result.id==1?(
               <h2>hii</h2>
           ):(
            <h2>not in range</h2>
           )
           })}
        </div>
     )
}
export default Cart;