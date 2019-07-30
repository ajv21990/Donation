import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import CheckoutForm from '../components/CheckoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Modal from '@material-ui/core/Modal'




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
                <div className="DonationForm">

                    <TextField
                        id="DonationID"
                        fullWidth="true"
                        label="Donation ID"
                        margin="normal"
                        variant="outlined"
                        value={this.state.donationID}
                        onChange={event => this.setState({ donationID: event.target.value })}
                    />
                    <TextField
                        id="FirstName"
                        fullWidth="true"

                        label="First Name"
                        margin="normal"
                        variant="outlined"
                        value={this.state.fName}
                        onChange={event => this.setState({ fName: event.target.value })}
                    />
                    <TextField
                        id="LastName"
                        fullWidth="true"

                        label="Last Name"
                        margin="normal"
                        variant="outlined"
                        value={this.state.lName}
                        onChange={event => this.setState({ lName: event.target.value })}
                    />
                    <TextField
                        fullWidth="true"
                        type="email"
                        id="Email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                    <TextField
                        id="Address"
                        fullWidth="true"

                        label="Address"
                        margin="normal"
                        variant="outlined"
                        value={this.state.address}
                        onChange={event => this.setState({ address: event.target.value })}
                    />
                    <TextField
                        id="Apt"
                        fullWidth="true"

                        label="Apt#"
                        margin="normal"
                        variant="outlined"
                        value={this.state.apt}
                        onChange={event => this.setState({ apt: event.target.value })}
                    />
                    <TextField
                        id="City"
                        fullWidth="true"

                        label="City"
                        margin="normal"
                        variant="outlined"
                        value={this.state.city}
                        onChange={event => this.setState({ city: event.target.value })}
                    />
                    <TextField
                        id="State"
                        fullWidth="true"

                        label="State"
                        margin="normal"
                        variant="outlined"
                        value={this.state.state}
                        onChange={event => this.setState({ state: event.target.value })}
                    />
                    <TextField
                        id="Zip"
                        fullWidth="true"

                        label="Zip"
                        margin="normal"
                        variant="outlined"
                        value={this.state.zip}
                        onChange={event => this.setState({ zip: event.target.value })}
                    />
                    <TextField
                        id="Amount"
                        fullWidth="true"

                        label="Amount"
                        margin="normal"
                        variant="outlined"
                        value={this.state.amount}
                        onChange={event => this.setState({ amount: event.target.value })}
                    />


                    <TextField
                        id="CardNumber"
                        fullWidth="true"

                        label="Card#"
                        margin="normal"
                        variant="outlined"
                        value={this.state.cardNumber}
                        onChange={event => this.setState({ cardNumber: event.target.value })}
                    />
                    <TextField
                        id="CVV"
                        fullWidth="true"

                        label="CVV"
                        margin="normal"
                        variant="outlined"
                        value={this.state.cvv}
                        onChange={event => this.setState({ cvv: event.target.value })}
                    />
                    <TextField
                        id="Exp"
                        fullWidth="true"

                        label="Exp"
                        margin="normal"
                        variant="outlined"
                        value={this.state.exp}
                        onChange={event => this.setState({ exp: event.target.value })}
                    />
                    <FormControl variant="outlined">
                        <InputLabel >
                            Frequency
                        </InputLabel>
                        <Select
                            native
                            value={this.state.frequency}
                            onChange={event => this.setState({ frequency: event.target.value })}
                            input={
                                <OutlinedInput labelWidth={500} name="age" id="frequency" />
                            }>
                            <option value="" />
                            <option value={"One Time"}>One Time</option>
                            <option value={"Monthly"}>Monthly</option>
                            <option value={"Yearly"}>Yearly</option>
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.Submit} >SUBMIT</Button>
                </div>
                <br />
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