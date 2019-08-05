import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { navigate } from "gatsby"
import axios from "axios";



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
                this.sendEmailFn()

            }
            if (!response.ok) alert("Did not charge try again")
        }
        catch{
            navigate("/404.html")

        }
    }

    sendEmailFn = async () => {
        try {
            const email = this.props.email
            let emailSent = {
                "email": email
            }
            emailSent = JSON.stringify(emailSent)

            await axios.post('https://fpjrm7idv2.execute-api.us-west-2.amazonaws.com/dev/donate-ses', emailSent)
            console.log("success")
            navigate("/ThankYou/")
        } catch (err) {
            alert(err)
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