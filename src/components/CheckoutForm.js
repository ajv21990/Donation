import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { navigate } from "gatsby"


class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        try {
            let { token } = await this.props.stripe.createToken({ name: "Name" })
            let response = await fetch("/charge", {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: token.id
            });
            if (response.ok) {
                navigate("/ThankYou/")
            }
            if (!response.ok) alert("Did not charge try again")
        }
        catch{
            navigate("/404.html")
           
        }




    }



    render() {
        return (
            <div className="checkout">
                <p>Please confirm your payment information</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm)