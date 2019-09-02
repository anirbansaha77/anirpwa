import React, { Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../redux/actions/CourseActions';
import '../Courses.css';
import { Courses } from '../../../Data/CourseUtility/CourseEnum';
const LoadContent = React.lazy(() => import ('../components/LoadContent'));

class ES6Questions extends React.Component {
  componentDidMount() {
    if(!this.props.Courses[Courses.ES6]){
      this.props.actions.getCourseData(Courses.ES6);
    } else {
      console.log("found",this.props.Courses[Courses.ES6])
    }
      
  }
  render() {
    return (
      <div>
          <div className="PageTitle">ES6Questions Interview Questions</div>
          <br/>
          <Suspense fallback={<div>Loading JavaScript Content...</div>}>
            <LoadContent data={this.props.Courses[Courses.ES6.value]}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ES6Questions);