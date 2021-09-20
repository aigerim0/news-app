import React, {useEffect, useState} from 'react';
import axios from "axios";
import Modal from 'react-modal';
import './style.css'
import {useForm} from "react-hook-form";
import StudentItem from "../../components/StudentItem";
import Buttons from "../../components/Buttons";
import FormInput from "../../components/FormInput";


const Students = () => {
    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {reset} = useForm();
    const {register, handleSubmit, formState: {errors}} = useForm();
    useEffect(() => {
        axios('https://613b7037110e000017a45616.mockapi.io/api/students')
            .then(({data}) => setStudents(data))
    }, [])
    const closeModal = () => {
        setShowModal(false)

    }
    const sentData = (data) => {
        axios.post('https://613b7037110e000017a45616.mockapi.io/api/students', data)
            .then(({data: student}) => {
                setStudents([...students, student])
                setShowModal(false)
                reset()
            })
    }
    const deleteStudents = (id,) => {
        axios.delete(`https://613b7037110e000017a45616.mockapi.io/api/students/${id}`)
            .then(() => setStudents(students.filter(el => el.id !== id)))
    }

    const updateTodo = (data, id) => {
        axios.put(`https://613b7037110e000017a45616.mockapi.io/api/students/${id}`, data)
            .then(({data}) => {
                setStudents(students.map(el => el.id === id ?{...students,data}: el))
                setShowModal(false)
                reset()
            })

    }
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
        <div>
            <table className='table'>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>НОМЕР ТЕЛЕФОН</th>
                    <th>СУММА КОНТРАКТА</th>
                    <th>ОПЛАТИЛ</th>
                    <th>НОУТБК</th>
                    <th>ГРУППА</th>
                    <th>СТАТУС</th>
                    <th>ПОЛ</th>
                    {/*<th>КОММЕНТАРИЙ</th>*/}

                    <th>ACTIONS</th>
                </tr>
                {
                    students.map((item, idx) =>
                        <StudentItem closeModal={closeModal}
                                     sentData={sentData}
                                     deleteStudents={deleteStudents}
                                     updateTodo={updateTodo}
                                     key={item.id}
                                     item={item}
                                     idx={idx}/>
                    )
                }
            </table>
            <Buttons onClick={() => setShowModal(true)} title=' Добавить нового студента'/>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit(sentData)}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <FormInput
                                    label='Ведите иммя'
                                    required
                                    register={register}
                                    name='name'
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <FormInput
                                    label='СУММА КОНТРАКТА'
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
                                    label='НОМЕР ТЕЛЕФОНА'
                                    name='phone'
                                    required
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <FormInput
                                    label='ОПЛАТИЛ'
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
                            label='НОУТБУК'
                            name='laptop'
                            required
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className='row select'>
                        <div className='col-md-4'>
                            <div>
                                <label className='label' htmlFor='group'><b>ГРУППА</b> </label>
                                <select   {...register('group', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>Выберите группу</option>
                                    <option value="morning">утренняя</option>
                                    <option value="evening">вечерняя</option>
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4'>

                            <div>
                                <label className='label' htmlFor='status'><b>СТАТУС</b> </label>
                                <select   {...register('status', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>Выберите статус</option>
                                    <option value="actions">actions</option>
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4'>

                            <div>
                                <label className='label' htmlFor='gender'><b>ПОЛ</b></label>
                                <select   {...register('gender', {required: true})} className="form-select"
                                          aria-label="Default select example">
                                    <option selected>Выберите пол</option>
                                    <option value="male">мужской</option>
                                    <option value="female">женский</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <label className='label' htmlFor='laptop'><b>ВВЕДИТЕ КОММЕНТАРИЙ</b> </label>*/}
                    {/*    <input className='w-100 students-input comment-input' type='textarea'*/}
                    {/*           placeholder='Комментарии...'*/}
                    {/*           {...register('comment')}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <Buttons title='Отправить'/>
                </form>
            </Modal>
        </div>
    );
};

export default Students;