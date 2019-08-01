import React from "react";
import { Formik } from "formik";
import { Form } from '../components/formDonate'
import * as Yup from "yup";
import { State } from "xstate";

const validationSchema = Yup.object({
    donationID: Yup.number("Enter a donation ID").required("Donation ID is required"),
    fName: Yup.string("Enter a first name").required("First name is required"),
    lName: Yup.string("Enter a last name").required("Last name is required"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    address: Yup.string("Enter your address")
        .required("Address is required"),
    city: Yup.string("Enter a city").required("City is required").max(30, "Enter a valid city"),
    state: Yup.string("Enter a state").required("State is required").max(2, "Enter state abbrev").min(2, "Enter state abbrev"),
    zip: Yup.string("Enter a zip code").required("Zip code is required").max(10, "Enter a valid zip code").min(5, "Enter a valid zip code"),
    amount: Yup.number("Enter a dollar amount").required("Amount is required").positive(),
    cardNumber: Yup.string("Enter a card number").required("Card number is required").min(19, "Enter a valid card number").max(19, "Enter a valid card number"),
    cvv: Yup.string("Enter a cvv").required("cvv is required").min(3, "Enter a valid cvv").max(3, "Enter a valid cvv"),
    exp: Yup.string("Enter a expiration").required("Expiration is required"),
    // frequency: Yup.string("Enter a city").required("City is required"),


});

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
            // frequency: "",
            cardNumber: '',
            cvv: '',
            exp: "",
            // showModal: false
        }
    }
    submitValues = formInput => {
        const form = formInput
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
            amount: formInput.amount,
            // frequency: "",
            cardNumber: formInput.cardNumber,
            cvv: formInput.cvv,
            exp: formInput.exp,
        })
        console.log(this.state)
    };

    render() {
        // const classes = this.props;
        return (
            <React.Fragment>
                <div>
                    <h1> Formik Form</h1>
                    <Formik
                        render={props => <Form {...props} />}
                        initialValues={this.state}
                        validationSchema={validationSchema}
                        onSubmit={this.submitValues}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default formikForm