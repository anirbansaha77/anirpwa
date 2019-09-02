import React, { Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../redux/actions/CourseActions';
import '../Courses.css';
import { Courses } from '../../../Data/CourseUtility/CourseEnum';
const LoadContent = React.lazy(() => import ('../components/LoadContent'));

class JavaScript extends React.Component {
  componentDidMount() {
    if(!this.props.Courses[Courses.JavaScript.value]){
      console.log("notfound call api")
      this.props.actions.getCourseData(Courses.JavaScript);
    } else {
      console.log("found",this.props.Courses[Courses.JavaScript.value])
    }
      
  }
  render() {
    return (
      <div>
          <div className="PageTitle">JavaScript Interview Questions</div>
          <br/>
          <Suspense fallback={<div>Loading JavaScript Content...</div>}>
            <LoadContent data={this.props.Courses[Courses.JavaScript.value]}/>
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