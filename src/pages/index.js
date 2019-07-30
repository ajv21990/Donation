import React from "react"
// import Navagation from '../Router'
import '../stylesheets/app.css'
import Welcome from '../pages/Welcome'

class IndexPage extends React.Component {
  render() {
    return (
      <div id="app">
        <Welcome />
      </div>
    )
  }
}

export default IndexPage
