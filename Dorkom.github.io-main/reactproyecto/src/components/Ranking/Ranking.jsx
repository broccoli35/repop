import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import React from 'react'

const Ranking = () => {

return (
    <><div>
        <h5 className='title-ranking'>Ranking best sellers periferics</h5>
        <div className='todo'>
            <div className='seccion-ranking'>
                <img className='img-ranking' src="audifonos.jpg" />
            </div>
            <div className='seccion-ranking'>
                <p className='parrafo1'>Headset</p>
            </div>
            <div className='precio-ranking'>
                <p className='parrafo2'>$25</p>
            </div>
        </div>

        <div className='todo'>
            <div className='seccion-ranking'>
                <img className='img-ranking' src="teclado.jpg" />
            </div>
            <div className='seccion-ranking'>
                <p className='parrafo1'>Mouse and Keyboards</p>
            </div>
            <div className='precio-ranking'>
                <p className='parrafo2'>$25</p>
            </div>
        </div>

        <div className='todo'>
            <div className='seccion-ranking'>
                <img className='img-ranking' src="mousepad.jpg" />
            </div>
            <div className='seccion-ranking'>
                <p className='parrafo1'>Standar Mouse Pad</p>
            </div>
            <div className='precio-ranking'>
                <p className='parrafo2'>$25</p>
            </div>
        </div>

        <div className='todo'>
            <div className='seccion-ranking'>
                <img className='img-ranking' src="mousepad2.jpg" />
            </div>
            <div className='seccion-ranking'>
                <p className='parrafo1'>XL Mouse Pad</p>
            </div>
            <div className='precio-ranking'>
                <p className='parrafo2'>$25</p>
            </div>
        </div>
       <p> '</p>
       <p> '</p>
       
            <h5 className='title-ranking'>Ranking best sellers builds</h5>
            <div className='todo'>
            <nav className="navbar navbar-expand-lg navbar-dark" />
                <div className='seccion-ranking'>
                    <img className='img-ranking' src="monsterpc.jpg" />
                </div>
                <div className='seccion-ranking'>
                    <p className='parrafo1'>Monster Pc</p>
                </div>
                <div className='precio-ranking'>
                    <p className='parrafo2'>$1899</p>
                </div>
                </div>
            

            <div className='todo'>
                <div className='seccion-ranking'>
                    <img className='img-ranking' src="monsterpc.jpg" />
                </div>
                <div className='seccion-ranking'>
                    <p className='parrafo1'>Cruisers Builds</p>
                </div>
                <div className='precio-ranking'>
                    <p className='parrafo2'>$1759</p>
                </div>
            </div>

            <div className='todo'>
                <div className='seccion-ranking'>
                    <img className='img-ranking' src="monsterpc.jpg" />
                </div>
                <div className='seccion-ranking'>
                    <p className='parrafo1'>Nasa PC</p>
                </div>
                <div className='precio-ranking'>
                    <p className='parrafo2'>$1679</p>
                </div>
            </div>

            <div className='todo'>
                <div className='seccion-ranking'>
                    <img className='img-ranking' src="monsterpc.jpg" />
                </div>
                <div className='seccion-ranking'>
                    <p className='parrafo1'>Budget Build</p>
                </div>
                <div className='precio-ranking'>
                    <p className='parrafo2'>$1299</p>
                </div>
            </div>

        <p> '</p>
       <p> '</p>
        </div></>


)




}

export default Ranking;