import React from "react"
import '../stylesheets/welcomeStyle.css'
import { Spring } from 'react-spring/renderprops'


class Welcome extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="thankYouPage col-md-12 ">
                <Spring
                    config={{ tension: 50, friction: 90 }}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}><h1>Thank You For Your Donation!</h1>
                        <p>Impedit repudiandae eius ipsam laboriosam laboriosam. Hic quasi
                estdolorem neque utsed. Suscipit impeditaccusantium vero dolor et saepe quia qui tempora. Et etpraesentium
                libero.</p></div>}
                </Spring>


            </div>
        )
    }
}

export default Welcome