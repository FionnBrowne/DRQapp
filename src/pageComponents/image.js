import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
//export class so it can be used in different locations
export class Image extends React.Component {

    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fpizza-beer-1200x628-facebook-1200x628.jpg&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Fhigh-blood-pressure-hypertension%2Ffoods-to-avoid&tbnid=wsdQKWsoMY3JSM&vet=12ahUKEwjizM-YtPjtAhWSQkEAHcdvDIIQMygEegUIARDWAQ..i&docid=tqHmbqJTxas2NM&w=1200&h=628&q=food&ved=2ahUKEwjizM-YtPjtAhWSQkEAHcdvDIIQMygEegUIARDWAQ"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                </Carousel>

            </div>
        );
    }
}