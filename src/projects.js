import React, { Component } from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'

function DlItem(props) {
  return (
    <div className='row mt-2 mb-0'>
      <dt className='col-3'>{props.objectKey}:</dt>
      <dd className='col-9'>
        <a href={props.value} target='_blank' rel='noopener noreferrer'>{props.value}</a>
      </dd>
    </div>)
}

class Project extends Component {
  render() {
    const { data } = this.props
    return (
      <Col md={6} className='d-flex flex-row align-items-stretch'>
        <Card className='mb-3 shadow-sm h-md-250'>
          <Card.Img variant='top' src={data.img} />
          <Card.Body className='d-flex flex-column align-items-start'>
            <Card.Title className='mb-0'>{data.title}</Card.Title>
            <div>
              {data.tags.map((tag, i) => { return (<Badge key={i} variant='secondary' className='mr-1'>{tag}</Badge>) })}
            </div>
            <Card.Text className='mb-auto'>{data.desc}</Card.Text>
            <dl>
              {
                data.links.map((link, i) => <DlItem key={i} objectKey={link.type} value={link.url} />)
              }
            </dl>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }

  render() {
    if (this.props.data) {
      const { data } = this.props
      const cards = []
      for (let i = 0; i < data.length; i++) {
        cards.push(<Project data={data[i]} key={i} />)
        if (i % 2 === 1) {
          cards.push(<div key={'w-' + i} className='w-100' />)
        }
      }
      return (
        <Row>
          {cards}
        </Row>
      )
    } else {
      return <Row />
    }
  }
}
export default Projects
