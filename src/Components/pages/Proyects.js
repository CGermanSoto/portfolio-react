import React from "react";
import '../../Styles/Proyects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Proyects(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Mis <span className="red mi">proyectos</span></h1>
            <div className="parrafoAboutMe">
                <div class="parent">
                    <div class="div1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyects;