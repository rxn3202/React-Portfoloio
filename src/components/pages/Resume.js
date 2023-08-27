import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import rxn3202Resume from '../../assets/docs/rxn3202.pdf'


import { faSquareJs, faCss3Alt, faHtml5,faReact, faNode,faJava } from '@fortawesome/free-brands-svg-icons'

export default function Resume() { 
    return (
        <div className = "resume-div p-5 align-center"> 

          <div className="row p-5">
            <div className="col text-center">
            <a>
            <FontAwesomeIcon icon={faNode} size="8x" /> 
            <p>NodeJS</p> 
            </a>
            </div>
            <div className="col text-center">
            <a>
            <FontAwesomeIcon icon={faJava} size="8x" />
            <p>Java</p> 
            </a>
            </div>
            <div className="col text-center">
            <a>
            <FontAwesomeIcon icon={faDatabase} size="8x" /> 
            <p>MongoDB</p> 
            </a>
            </div>
          </div>

          <div className="row p-5">
            <div className="col text-center">
            <a>
              <FontAwesomeIcon icon={faReact} size="8x" />
              <p>React</p> 
            </a>
            </div>
            <div className="col text-center">
            <a>
              <FontAwesomeIcon icon={faHtml5} size ="8x" />
              <p>HTML 5</p> 
            </a>
            </div>
            <div className="col text-center">
            <a>
              <FontAwesomeIcon icon={faCss3Alt} size="8x" /> 
              <p>CSS</p> 
            </a>
            </div>
            <div className="col text-center">
            <a>
              <FontAwesomeIcon icon={faSquareJs} size="8x" />
              <p>JavaScript</p> 
            </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh' }}>
            
            <div className='submit-button'>
              <a
                href ={rxn3202Resume} download="Example-PDF-document" target='_blank' rel = "noreferrer">
                  <button className="btn btn-dark btn-lg">Download Resume 📝</button>
              </a>
         
            </div>
          </div>
          
          
        </div>
    );
}