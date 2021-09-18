import React, {useState} from 'react';
import Buttons from "../Buttons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'



const StudentItem = ({item,idx,deleteStudents,updateTodo}) => {
    const [edit,setEdit] = useState(false )
    const [modified,setModified] = useState(item.name)

    const handleSave = () => {
        updateTodo(modified,item.id)
        setEdit(false)
}
    return (

        <tr>
            <tb>{idx + 1}</tb>
            <td>
                {

                    edit ? <input onChange={(e) => setModified(e.target.value)} type="text" defaultValue={item.name}/> : <span>{item.name}</span>
                }
            </td>
            <td>{item.phone}</td>
            <td>{item.contract}</td>
            <td>{item.payment}</td>
            <td>{item.laptop}</td>
            <td>{item.group}</td>
            <td>{item.status}</td>
            <td>{item.gender}</td>
            {/*<td>{item.comment}</td>*/}
            <td>{item.actions}</td>
            <td>

                   <div className='d-flex'>
                       <Buttons color='warning'  title={edit ? <FontAwesomeIcon icon={faSave}/> :<FontAwesomeIcon icon={faEdit}/>}
                                onClick={() => edit ? handleSave() : setEdit(true)}
                      />
                       <Buttons   color='danger' title={<FontAwesomeIcon icon={faTrash}/> } onClick={() =>deleteStudents(item.id)  }/>
                   </div>

            </td>
        </tr>
    );
};

export default StudentItem;