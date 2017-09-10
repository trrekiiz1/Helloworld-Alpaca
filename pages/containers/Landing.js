import React from 'react'
import styled from 'styled-components'

const Register = styled.button`
  border: 5px solid #fff;
  font-size: 1.5em;
  border-radius: 30px;
  padding: 0em 1em;
  background: none;
  color: #fff;
  min-width: 6em;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`

class LandingPage extends React.Component {
  render() {
    return (
      <div className="row landing-height">
        <div className="hello-field col-12 text-center">
          <img className="helloworld" src="../../static/img/logo.png" alt="logo-alpaca" />
        </div>
        <div className="col-12 text-center">
          <img className="breaklimit" src="../../static/img/desc.png" alt="break-limit" />
        </div>
        <Register style={{marginTop: '2em'}}>Coming Soon</Register>
      </div>
    )
  }
}

export default LandingPage