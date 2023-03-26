import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
   return (
    <div className='alert alert-secondary'>Currency: {
    <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >
      <select name='Currency'id="Currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '0rem' , backgroundColor:'#33FF49', color:'white'}}>
    <option style={{color:'black'}} value="£">£ Pound</option>
    <option style={{color:'black'}} value="$">$ Dollar</option>
    <option style={{color:'black'}} value="€">€ Euro</option>
    <option style={{color:'black'}} value="₹">₹ Rupee</option>
  </select>	
  </label>
      }
</div>
   );
};

export default Currency;