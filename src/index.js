import React from "react";
import ReactDOM from "react-dom";

function Card() {
    <div className="cards">
        <div className="card">
            <img src="images/robot.png" alt="" className="card_img" />
            <div className="card_info">
                <span className="card_category">A netflix orignal series</span>
                <h3 className="card_title">dark knight</h3>
                <a href="https://www.google.com" target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
}


ReactDOM.render(
    <>
        <Card />
    </>,
    document.getElementById('root')
);