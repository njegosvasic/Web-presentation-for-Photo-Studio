import React , {useState} from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import slika2 from '../slike/vencanje2.jpg';
import Header2 from './Header2';

import Modal2 from './Modal2';


export default function Galerija() {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setImgSrc(e.target.src)
        setShow(true);}
    return (
        
        <>
      
        <div>
            <Header2/>     
            <Modal2 imgsrc={imgSrc} show={show} handleClose={handleClose} />
            <h1 className='h11'>OVDE CE DA BUDE GALERIJA </h1>
                <Card >
                    <Card.Img variant="top" className='card-img-top' src={slika2} />
                </Card>
                <h1 id='Vencanja' className='h11'>Vencanja</h1>
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



                <h1 id='Rodjendani' className='h11'>Rodjendani</h1>
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




                <h1 id='Snimci' className='h11'>Snimci</h1>

                <CardGroup className='galerija2'>
                <Card className='galerija3'>
                <iframe galerijasnimci width="640" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
                <Card className='galerija3'>
                <iframe width="645" height="317" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
                </CardGroup>

                <CardGroup className='galerija2'>
                <Card className='galerija3'>
                <iframe galerijasnimci width="640" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
                <Card className='galerija3'>
                <iframe width="645" height="317" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Card>
                </CardGroup>

                
        </div>
    </>

    )
}