import React from 'react'

export default class Redirect extends React.Component {
  componentDidMount () {
	window.location = "https://telmo.im/"
  }

  render () {
  	return <></>
  }
}