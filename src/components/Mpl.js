import React, { Component } from "react";
import "./mpl.css";
import promoCard from "../assets/rfrrl_card_bg.png";
import fan1 from "../assets/img-fan-1.png";
import buttonImg from "../assets/cta-android.png";

class MPL extends Component {
    state = {
        username: this.props.username,
        cash: this.props.cash,
        referralCode: this.props.referralCode,
        description: this.props.description
    };
    render() {
        const { username, cash, referralCode, description } = this.state;
        return (
            <div className="page">
                <div className="topSection">
                    <div className="userDetails">
                        <span className="username">
                            <em>{username}</em>
                        </span>
                        <br />
                        <span className="description">
                            <em>{description}</em>
                        </span>
                    </div>
                    <div className="promoDetails">
                        <div className="cash">
                            <em>Get FREE Cash</em>
                            <br />
                            <span className="reward">₹{cash}</span>
                        </div>
                        <div className="referral">
                            Use Referral Code <br />
                            <span className="referralCode">{referralCode}</span>
                        </div>
                        <img className="batsman" src={fan1} alt="fan1" />
                    </div>
                </div>

                <div className="bottomSection">
                    <div className="ribbon">
                        Install the MPL App & Get 20 MPL Tokens Free!
                    </div>
                    <div className="button">
                        <button>
                            <img src={buttonImg} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MPL;
