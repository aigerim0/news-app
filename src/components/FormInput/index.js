import React from 'react';

const FormInput = ({label, name, required, register, errors,item}) => {
    return (
        <>
            <label className='label' htmlFor={name}><b> {label}</b></label>
            <input  className='w-100 students-input' type='text' id={name}
                   {...register(name, {required: true})}

            />
            {errors.name && <div className='text-errors'>Заполни поле!!1</div>}

        </>
    );
};

export default FormInput;