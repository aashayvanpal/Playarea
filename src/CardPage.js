import React from 'react';
import orderfood from './images/order-food.svg'
import cook from './images/cook.svg'
import deliver from './images/deliver.svg'
import { Container, Row, Col } from 'reactstrap';

// "clip-path": "polygon(50% 30%, 100% 15%, 100% 100%, 0 100%, 0 15%)",
class CardPage extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            Card page
                            <div className="container">
                                <div className="realCard">
                                    <img src={orderfood} />
                                    <div className="card1">
                                        <h2>ORDER YOUR FOOD</h2>
                                        <h4>Fully Customized delicasies according to your taste</h4>
                                    </div>
                                </div>

                                <div className="realCard">
                                    <img src={deliver} />
                                    <div className="card2">
                                        <h2>DELIVER  OR  PICKUP</h2>
                                        <h4>Services that we provide depend on the type of event and are fullfilled according to your convinience</h4>
                                    </div>
                                </div>

                                <div className="realCard">
                                    <img src={cook} />
                                    <div className="card1">
                                        <h2 >DELICIOUS RECIPIE</h2>
                                        <h4>Homely, hygenic and tasty food is superwised by our expert chef Varsha Vanpal</h4>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default CardPage;