import React , {useState} from 'react';
import {Card, CardGroup,Modal, Button} from 'react-bootstrap';
import slika1 from '../slike/vencanje1.jpg';
import slika2 from '../slike/vencanje2.jpg';
import Modal2 from './Modal2';


export default function PocetnaGalerija() {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setImgSrc(e.target.src)
        setShow(true);}
    return (
        
        <>
      
        <div>
            <Modal2 imgsrc={imgSrc} show={show} handleClose={handleClose} />
            <h1 id='Galerija' className='h11'>Pogledajte naše najnovije radove</h1>
                <CardGroup className='galerija2'>
                <Card className='galerija3'>
                    <Card.Img  src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                </CardGroup>

                <CardGroup className='galerija2'>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                </CardGroup>

                <CardGroup className='galerija2'>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                <Card className='galerija3'>
                    <Card.Img src={slika2} onClick={e=> handleShow(e)}/>
                </Card>
                </CardGroup>        
        </div>
    </>

    )
}