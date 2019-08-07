import React from "react";
import { Formik } from "formik";
import { Form } from '../components/formDonate'
import CheckoutForm from '../components/CheckoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Modal from '@material-ui/core/Modal'
import axios from 'axios'
import * as Yup from "yup";


const validationSchema = Yup.object({
    donationID: Yup.number("Enter a donation ID").required("Donation ID is required"),
    fName: Yup.string("Enter a first name").required("First name is required").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    lName: Yup.string("Enter a last name").required("Last name is required").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    address: Yup.string("Enter your address")
        .required("Address is required"),
    apt: Yup.string("Enter your apt#").notRequired(),
    city: Yup.string("Enter a city").required("City is required").max(30, "Enter a valid city").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    state: Yup.string("Enter a state").required("State is required").length(2, "Enter state abbrev").uppercase(),
    zip: Yup.string("Enter a zip code").required("Zip code is required").max(10, "Please enter a valid zip code.").min(5, "Please enter a valid zip code.").matches(/\d{5}/, 'Please enter a valid zip code.'),
    amount: Yup.number("Enter a dollar amount").required("Amount is required").positive("Amount must be a positive"),
    cardNumber: Yup.string("Enter a card number").required("Card number is required").min(16, "Enter a valid card number").max(16, "Enter a valid card number"),
    cvv: Yup.string("Enter a cvv").required("cvv is required").min(3, "Enter a valid cvv").max(3, "Enter a valid cvv"),
    exp: Yup.string("Enter a expiration").required("Expiration is required").max(7, "Enter a valid expiration"),
    frequency: Yup.string("Enter a Frequency").required("Frequency is required"),
})

class formikForm extends React.Component {
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
    submitValues = formInput => {
        const form = formInput
        const amountFloat = parseFloat(formInput.amount).toFixed(2)
        this.setState({
            donationID: form.donationID,
            fName: formInput.fName,
            lName: formInput.lName,
            email: formInput.email,
            address: formInput.address,
            apt: formInput.apt,
            city: formInput.city,
            state: formInput.state,
            zip: formInput.zip,
            amount: amountFloat,
            frequency: formInput.frequency,
            cardNumber: formInput.cardNumber,
            cvv: formInput.cvv,
            exp: formInput.exp,
        })
        console.log("current state", this.state)
        const donor = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            email: this.state.email,
            address1: this.state.address,
            unitNumber: this.state.apt,
            city: this.state.city,
            state: this.state.state,
            postalCode: this.state.zip,
            amount: this.state.amount,
            frequency: this.state.frequency,
            cardNumber: this.state.cardNumber,
            cardSecurityCode: this.state.cvv,
            expireDate: this.state.exp
        }

        // check here to see what information is being passed in to your axios call
        console.log("Donor info: ", donor)

        // Make sure you set your url to include "apps" instead of "vapps".
        axios.post(`http://localhost:8080/apps/DonationsPage/DonationsForm/createDonation`, donor,

            // For this project include withCredentials:true in the header of your axios call in order for the
            // call to bypass the login page
            {
                withCredentials: true
            }
        )

            .then(res => {
                console.log('Axios response', res)
                if (res.status === 200) {
                    //Do Stripe API Call
                    // this.chargeStripe(donor.amount)
                    console.log("Moqui returned 200")
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
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <Formik
                        render={props => <Form {...props} />}
                        initialValues={this.state}
                        validationSchema={validationSchema}
                        onSubmit={this.submitValues}
                    />
                </div>
                <div>
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
                                    <CheckoutForm email={this.state.email}
                                        fName={this.state.fName}
                                        lName={this.state.lName} />
                                </Elements>
                            </div>
                        </StripeProvider>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default formikForm