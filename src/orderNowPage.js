import React from 'react';
import { Link } from 'react-router-dom'
import left from './images/right.svg'
import right from './images/left.svg'
import designLeft from './images/designleft.jpg'
import vegImage from './images/Veg-image.png'

class orderNowPage extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{
                    "textAlign": "center"
                }}>Order now page</h1>
                <div style={{ "position": "relative" }}>
                    <img src={designLeft} alt="designleft" id="designLeft" />
                    <div style={{ "display": "block", "height": "1000px", "width": "100%", "backgroundColor": "#F5EDC0" }}>
                        <div className="center-align">
                            <h1 className="h1-heading" id="txt1">Home is where,</h1>
                            <h1 className="h1-heading" id="txt2">I'm with food</h1>
                            <Link to='/Register' id="OrderNow"
                            >ORDER NOW !</Link>
                        </div>
                        <div id="vegImg-placement">
                            <img id="vegImg" src={vegImage} alt="veg-img" />
                            <h3 style={{ "textAlign": "center", "marginBottom": "250px" }}>Pure Vegetarian</h3>
                        </div>
                    </div >
                </div >
            </div >

        );
    }
}

export default orderNowPage;