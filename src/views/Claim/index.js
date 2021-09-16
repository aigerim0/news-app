import React, {useEffect, useState} from 'react';
import axios from "axios";

const Claim = () => {
    const [claim,setClaim] = useState([])
    useEffect(() => {
        axios('https://613b7037110e000017a45616.mockapi.io/api/callback')
            .then(({data}) =>setClaim(data) )
    },[])
    return (
        <div className='row'>
            {
                claim.map(item =>
               <div className='col-md-4 ' key={item.id} >
                  <div>
                      <h5><b>Name:</b> {item.name}</h5>
                  </div>
                   <div>
                       <p><b>Phone:</b> {item.phone}</p>
                   </div>
                   <div>
                       <p><b>email:</b> {item.email}</p>
                   </div>
               </div>

                )
            }
        </div>
    );
};

export default Claim;