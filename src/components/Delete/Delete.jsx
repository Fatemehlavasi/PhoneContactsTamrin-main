import React from "react";
// import "../Delete/Delete.style.css"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
function Delete( { handelDelet , showMsg , handelShowDisMsg}) {
    
    return(
        <div style={{display:showMsg}} className='Delete'> 
            <div>  
                <CheckIcon cursor={'pointer'} onClick={handelDelet}/>
                <ClearIcon cursor={'pointer'} onClick={handelShowDisMsg} />  
            </div>
      </div> 
    )
}
export default Delete
