import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import FormikForm from '../components/formikForm'
import '../stylesheets/formStyle.css'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                <br />
            </div>

        )
    }
} 