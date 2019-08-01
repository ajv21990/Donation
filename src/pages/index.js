import React from "react"
import '../stylesheets/app.css'
// import Welcome from '../pages/Welcome'
import FORM from '../components/formikForm'

class IndexPage extends React.Component {
  render() {
    return (
      <div id="app">
        {/* <Welcome /> */}
        <FORM />
      </div>
    )
  }
}

export default IndexPage
