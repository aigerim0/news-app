import React from 'react';


const LogIn = () => {
    return (
        <div>
            <form className='d-flex justify-content-center'>
              <div className='col-md-6 my-5 ' >
                  <div className="mb-3 ">
                      <label htmlFor="exampleInputEmail1" className="form-label"> Логин</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                  </div>
                  <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>

                  <button type="submit" className="btn newDetail-btn d-flex-justify-content-right">Отправить</button>
              </div>
            </form>
        </div>
    );
};

export default LogIn;