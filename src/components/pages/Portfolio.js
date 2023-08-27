import React from 'react';

import project1 from '../../assets/images/heropedia.png'
import project2 from '../../assets/images/svg.png'
import project3 from '../../assets/images/weather.png'
import project4 from '../../assets/images/notetaker.png'

export default function Protfolio() { 
    return (
        <div className='m-3'>
          <h2 className='text-center'>Projects</h2>
          <div className="row p-5">
            <div className="col text-center d-flex">
              <div className="card flex-fill" style={{width: '30rem'}}>
                <img className="card-img-top" src={project1} alt='Nada' />
                <div className="card-body">
                  <h5 className="card-title">Heropedia</h5>
                  <a href="https://github.com/Justbeingtai/heropedia" className="btn btn-primary m-3">Github Repo</a>
                  <a href="https://justbeingtai.github.io/heropedia/" className="btn btn-primary m-3">Project Demo</a>
                </div>
              </div>

            </div>
            
            <div className="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project2} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">SVG-LogoMaker</h5>
                    <a href="https://github.com/rxn3202/SVG-LogoMaker" className="btn btn-primary m-3">Github Repo</a>
                    <a href="https://www.youtube.com/watch?v=0qxbvU-HXE0&ab_channel=richnguyen" className="btn btn-primary m-3">Project Demo</a>
                  </div>
                </div>

            </div>

            
            <div className="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project3} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">06-Weather-Watcher</h5>
                    <a href="https://github.com/rxn3202/06-Weather-Watcher" className="btn btn-primary m-3">Github Repo</a>
                    <a href="https://rxn3202.github.io/06-Weather-Watcher/" className="btn btn-primary m-3">Project Demo</a>
                 </div>
              </div>

            </div>
          </div>

          
          <div className="row p-5">
            <div className="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                <img className="card-img-top" src={project4} alt='Nada' />
                <div className="card-body">
                  <h5 className="card-title">Note-Taker</h5>
                  <a href="https://github.com/rxn3202/Note-Taker" className="btn btn-primary m-3">Github Repo</a>
                  <a href="https://rxn-note-taker.herokuapp.com/" className="btn btn-primary m-3">Project Demo</a>
                </div>
              </div>

            </div>

            </div>
           
          </div>
    );
}