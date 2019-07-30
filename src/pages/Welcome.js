import React from "react"
import Button from '@material-ui/core/Button'

import '../stylesheets/welcomeStyle.css'
import { Spring } from 'react-spring/renderprops'


class Welcome extends React.Component {
    goToDonate = () => {
        this.props.history.push("/donateForm")
    }
    render() {
        return (
            <div className="welcomePage col-md-6 ">
                <Spring
                    config={{ tension: 50, friction: 90 }}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}><h1>Welcome</h1>
                        <p>Impedit repudiandae eius ipsam laboriosam laboriosam. Hic quasi
                estdolorem neque utsed. Suscipit impeditaccusantium vero dolor et saepe quia qui tempora. Et etpraesentium
                libero.

                Aperiam ut corporis sit nobis facilis inventore sit aperiam voluptate. Id facere quas minus ratione quis totam
                aut quia. Enim ipsum expedita repellat sequi saepe consequatur. Voluptates velit esse deserunt asperiores.
                Quidem iusto vitae.

    </p><Button variant="contained" color="primary" onClick={this.goToDonate} >DONATE NOW</Button></div>}
                </Spring>


            </div>
        )
    }
}

export default Welcome