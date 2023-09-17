
import React, { Component } from 'react'
import { Card , Button} from 'react-bootstrap';
import classes from './newsItem.module.css';
export class Newsitem extends Component {
  render() {
    let {title,description,imageURL,newsURL,author,date}=this.props;
    return (
      <div className='my-3'>
        <Card style={{ width: 'auto', height:'auto'}}>
      <Card.Img className={classes.image} variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title className={classes.title}>{title}</Card.Title>
        <Card.Text className={classes.desc}>
         {description}
        </Card.Text>
        <Card.Subtitle class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></Card.Subtitle>
        <Button href={newsURL} target='_blank' variant="dark btn-sm">Read More</Button>
      </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Newsitem