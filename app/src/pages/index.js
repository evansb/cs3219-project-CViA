import _           from 'lodash';
import React       from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, Button } from 'react-bootstrap';
import JobCard     from 'components/JobCard';

@connect((state) => ({ jobs: state.jobs }))
export default class HomeView extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    jobs  : React.PropTypes.any
  }

  render () {
    return (
      <div>
        <Row>
          <Col md={2}>
            <Button bsStyle="primary">
              Post New Job
            </Button>
          </Col>
          <Col md={6}>
            <Input type="text" addonBefore="Search" />
          </Col>
        </Row>
        {
          _.chunk(this.props.jobs.toArray(), 3).map((jobs, pid) => {
            return (
              <Row>
               {
                 jobs.map((job, cid) =>
                  <Col key={3 * pid + cid} md={4}>
                    <JobCard job={job} />
                  </Col>)
                }
              </Row>
            );
          })
        }
      </div>
    );
  }
}
