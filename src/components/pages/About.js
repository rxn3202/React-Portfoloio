import React from 'react';
import avatar from '../../assets/images/me.PNG'


export default function About() { 
    return (
        <div className='aboutme p-5 m-5'>
            <div className='row mt-3 my-3'>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
                    <img src={avatar} alt="Image description" style={{ width: '50%', height: 'auto' }}/>
                    
                </div>
                    <div className="col-sm-6 col-lg-8">
                    <div>
                            <h3>About Me</h3>
                            <p> 
                              Hello, I am currently studying web development.
                            </p> 
                            <p>
                                I graduated from UCI with a focus in History. 
                                Through this bootcamp, I hope to gain new skills that would allow me to take my career in a new direction.
                            </p>
                    </div>
                </div>

            </div>
          
        </div>
    );
}