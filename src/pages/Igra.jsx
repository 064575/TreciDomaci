import React, { useState } from 'react';
import { getBoja } from '../boje';
import Broj from '../components/Broj';


export default function Igra({ pokusaji, dodajPokusaj }) {
  const [ulog, setUlog] = useState(0);
  const [boja, setBoja] = useState('black');
  const [dobitak, setDobitak] = useState(undefined);
  return (
    <div className='container mt-3'>
      <h2>Poslednji izvuceni brojevi</h2>
      <div className='row d-flex  align-items-center border'>
        {
          pokusaji.map((element, index) => {
            return (
              <Broj broj={element.broj} key={index} />
            )
          })
        }
      </div>

      <div className='row mt-2'>
        <div className='col-7'>
          <h2 className='mt-2'>Odaberite boju</h2>
          <div >
            <select className='form-control' value={boja} onChange={e => setBoja(e.target.value)}>
              <option value="red">Crvena</option>
              <option value="black">Crna</option>
            </select>
          </div>
          <h2 className='mt-2'>Unesite ulog</h2>
          <div>
            <input className='form-control' type='number' value={ulog} onChange={e => {
              const value = Number(e.target.value);
              if (isNaN(value) || value < 0) {
                return;
              }
              setUlog(value);
            }} />
          </div>
          <div>
            <button
              disabled={ulog <= 0}
              onClick={() => {
                const broj = Math.floor(37 * Math.random());
                const b = getBoja(broj)
                const d = b === boja ? ulog * 2 : 0
                setDobitak(d);
                dodajPokusaj({
                  broj,
                  ulog,
                  boja: b,
                  dobitak: d
                })
              }}
              className='btn btn-danger mt-3 form-control'>Igraj</button>
            {
              dobitak !== undefined && (
                <div className='mt-3 display-4'>
                  {
                    dobitak < 0 ? 'Nazalost niste pogodili boju' : 'Dobitak ' + dobitak + ' EUR'
                  }
                </div>
              )
            }
          </div>
        </div>
        <div className='col-1'>

        </div>
        <div className='col-4 roulette'></div>
      </div>
    </div>
  );
}

