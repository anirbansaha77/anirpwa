import React, { Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../redux/actions/CourseActions';
import './JavaScript.css';
const LoadContent = React.lazy(() => import ('../components/LoadContent'));

class JavaScript extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(!this.props.Courses['JavaScript']){
      console.log("notfound call api")
      this.props.actions.getCourseData("JavaScript");
    } else {
      console.log("found",this.props.Courses['JavaScript'])
    }
      
  }
  render() {
    return (
      <div>
          <div className="PageTitle">JavaScript Interview Questions</div>
          <br/>
          <Suspense fallback={<div>Loading JavaScript Content...</div>}>
            <LoadContent data={this.props.Courses['JavaScript']}/>
          </Suspense>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Courses: state.CouseReducer,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators(Object.assign( {}, CourseActions), dispatch ),
});

export default connect(mapStateToProps, mapDispatchToProps)(JavaScript);