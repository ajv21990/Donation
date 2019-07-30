import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import DonationForm from './components/donateForm'
import Welcome from './pages/Welcome'
import Thank from './pages/ThankYou'



export default class Navagation extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/donateForm" component={DonationForm} />
                    <Route exact path="/thank" component={Thank} />
                </div>
            </Router>

        )
    }
}