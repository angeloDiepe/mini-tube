import React from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'

import { connect } from 'react-redux';
import { newTube } from '../../Redux/tube/tube-actions.js'

import './AddTube.scss';

class AddTube extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
			url: ''
		}
	}
	handleChange = event => {
    const { name, value } = event.target;


    this.setState({ [name]: value})
  }

	render() {
		return (
			<div id="tube-box">
			<Form>
			  <Form.Group controlId="formTitleTube">
			    <Form.Label>Title</Form.Label>
			    <Form.Control type="text" placeholder="Title of Tube" name="title" onChange={this.handleChange}/>
			  </Form.Group>
			  <Form.Group controlId="formUrlTube">
			    <Form.Label>Video URL</Form.Label>
			    <Form.Control type="text" placeholder="https://www.youtube.com/......" name="url" onChange={this.handleChange}/>
			  </Form.Group>
				<Button variant="dark">ADD</Button>
			</Form>
				<Button id="see-playlist" variant="outline-info" onClick={()=>{console.log('hello');this.props.handleShow()}}>See Playlist</Button>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	newTube : tube => dispatch(newTube(tube)),
})

export default connect(null ,mapDispatchToProps)(AddTube)