import React, {useState} from 'react';
import Buttons from "../Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal";
import FormInput from "../FormInput";
import {useForm} from "react-hook-form";



const StudentItem = ({item,idx,deleteStudents,updateTodo,sentData,showModal}) => {
    const [editModal,setEditModal] = useState(false )

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handlePut = (data) => {
        updateTodo(data,item.id)



    }
    const closeModal = () => {
        setEditModal(false)

    }
// const handlePut = (data) => {
// updateTodo(data,item.id)
// }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <>
        <tr>
            <tb>{idx + 1}</tb>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.contract}</td>
            <td>{item.payment}</td>
            <td>{item.laptop}</td>
            <td>{item.group}</td>
            <td>{item.status}</td>
            <td>{item.gender}</td>
            <td>{item.actions}</td>
            <td>

                <div className='d-flex'>
                       <Buttons color='warning'  title={<FontAwesomeIcon icon={faEdit}/>}
                                onClick={() => setEditModal(true)}
                      />
                       <Buttons   color='danger' title={<FontAwesomeIcon icon={faTrash}/> } onClick={() =>deleteStudents(item.id)  }/>
                   </div>

            </td>
        </tr>
            <Modal
                isOpen={editModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit(handlePut)}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <FormInput
                                    label='???????????? ????????'
                                    required
                                    register={register}
                                    defaultValue={item.name}
                                    name='name'
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <FormInput
                                    label='?????????? ??????????????????'
                                    name='contract'
                                    required
                                    register={register}
                                    errors={errors}
                                />
                            </div>


                        </div>
                        <div className='col-md-6'>
                            <div>
                                <FormInput
                                    label='?????????? ????????????????'
                                    name='phone'
                                    required
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <FormInput
                                    label='??????????????'
                                    name='payment'
                                    required
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <FormInput
                            label='??????????????'
                            name='laptop'
                            required
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className='row select'>
                        <div className='col-md-4'>
                            <div>
                                <label className='label' htmlFor='group'><b>????????????</b> </label>
                                <select   {...register('group', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>???????????????? ????????????</option>
                                    <option value="morning">????????????????</option>
                                    <option value="evening">????????????????</option>
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4'>

                            <div>
                                <label className='label' htmlFor='status'><b>????????????</b> </label>
                                <select   {...register('status', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>???????????????? ????????????</option>
                                    <option value="actions">actions</option>
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4'>

                            <div>
                                <label className='label' htmlFor='gender'><b>??????</b></label>
                                <select   {...register('gender', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>???????????????? ??????</option>
                                    <option value="male">??????????????</option>
                                    <option value="female">??????????????</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Buttons title='??????????????????'/>
                </form>
            </Modal>
            </>
    );
};

export default StudentItem;