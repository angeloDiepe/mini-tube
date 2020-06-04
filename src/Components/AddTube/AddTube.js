import React from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

import { connect } from 'react-redux';
import { newTube } from '../../Redux/tube/tube-actions.js'

import './AddTube.scss';

class AddTube extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
			url: '',
			success: false,
			error: false,
			msg: ""
		}
	}
	handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value})
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { title, url } = this.state;
  	if(title && url){
	    console.log(title, url)	
	    this.props.newTube({
	    	id: '1',
	    	title,
	    	url
	    })
	  	this.setState({success: true})
  	}
  	else{
  		this.setState({error: true, msg:"fill all please!"})
  	}
  }

	render() {
		return (
			<div id="tube-box">
			<Form onSubmit={this.handleSubmit}>
			  <Form.Group controlId="formTitleTube">
			    <Form.Label>Title</Form.Label>
			    <Form.Control type="text" placeholder="Title of Tube" name="title" onChange={this.handleChange}/>
			  </Form.Group>
			  <Form.Group controlId="formUrlTube">
			    <Form.Label>Video URL</Form.Label>
			    <Form.Control type="text" placeholder="https://www.youtube.com/......" name="url" onChange={this.handleChange}/>
			  </Form.Group>
				<Button variant="dark" type="submit">ADD</Button>
			</Form>
				<Button id="see-playlist" variant="outline-info" onClick={()=>{console.log('hello');this.props.handleShow()}}>See Playlist</Button>
				<Alert show={this.state.success} variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setState({success:false})} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
     	<Alert show={this.state.error} variant="danger">
        <Alert.Heading>Failed, {this.state.msg}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setState({error:false})} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	newTube : tube => dispatch(newTube(tube)),
})

export default connect(null ,mapDispatchToProps)(AddTube)