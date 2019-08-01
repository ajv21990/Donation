import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import CheckoutForm from '../components/CheckoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Modal from '@material-ui/core/Modal'
import FormikForm from '../components/formikForm'
import '../stylesheets/formStyle.css'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            donationID: '',
            fName: "",
            lName: "",
            email: "",
            address: "",
            apt: "",
            city: "",
            state: "",
            zip: '',
            amount: "",
            frequency: "",
            cardNumber: '',
            cvv: '',
            exp: "",
            showModal: false
        }
    }

    Submit = evt => {
        evt.preventDefault()

        const donor = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            email: this.state.email,
            address: this.state.address,
            apt: this.state.apt,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            amount: this.state.amount,
            frequency: this.state.frequency,
            cardNumber: this.state.cardNumber,
            cvv: this.state.cvv,
            exp: this.state.exp
        }

        axios.post(`http://localhost:8080/vapps/DonationsPage`, donor)
            .then(res => {
                console.log('Axios response', res)
                if (res.status === 200) {
                    //Do Stripe API Call
                    this.chargeStripe(donor.amount)
                }

            })
            .catch(error => {
                console.log("error:", error)
            })


    }

    chargeStripe = () => {
        this.setState({
            showModal: true
        })

    }

    onClose = () => {
        this.setState({
            showModal: false
        })
        this.goToThank()
    }
    goToThank = () => {

        this.props.history.push('/thank')
    }

    render() {

        return (
            <div className="FormPage">
                <Header />
                <hr />
                <div>
                    <div>
                        <FormikForm />
                    </div>
                    <br />
                </div>
                <hr />
                <Footer />
                <Modal
                    aria-labelledby="StripeModal"
                    aria-describedby="Modal"
                    open={this.state.showModal}
                    onClose={this.onClose}
                >
                    <StripeProvider apiKey=" pk_test_QKo9SBvX99oUe6wS8rYY4AKG00VXUbNidu">
                        <div className="stripeModal">
                            <h2>Your Donation Is Appreciated</h2>
                            <Elements>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </StripeProvider>
                </Modal>
                <br />

            </div>

        )
    }
} 