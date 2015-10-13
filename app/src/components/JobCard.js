import React from 'react';
import moment from 'moment';
import { Panel, Row, Col, Button } from 'react-bootstrap';

export default class JobCard extends React.Component {

  static propTypes = {
    job: React.PropTypes.any
  }

  renderHeader() {
    return (<h4 className="text-center text-primary">
              {this.props.job.get('title')}</h4>);
  }

  renderFooter() {
    return (
      <Row>
        <Col md={4}>
          <Button bsStyle="danger">Send CV</Button>
        </Col>
        <Col md={4}>
          <Button bsStyle="info">View Details</Button>
        </Col>
      </Row>
    );
  }
  render() {
    return (
      <Panel header={this.renderHeader()} footer={this.renderFooter()}
             className="job-card">
        <Row>
          <p>{this.props.job.get('short_description')}
          </p>
          <small>
            Posted by &nbsp;
            <strong>
              {this.props.job.get('poster').get('name')}
            </strong>
            &nbsp; on &nbsp;
            {moment(this.props.job.get('date')).format('DD MMMM')}
          </small>
        </Row>
      </Panel>
    );
  }
}
