import React, { Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../redux/actions/CourseActions';
import { Courses } from '../../../Data/CourseUtility/CourseEnum'
import '../Courses.css';
const LoadContent = React.lazy(() => import ('../components/LoadContent'));
class ReactPage extends React.Component {
  componentDidMount() {
    if(!this.props.Courses[Courses.React.value]){
      console.log("notfound call api")
      this.props.actions.getCourseData(Courses.React);
    } else {
      console.log("found",this.props.Courses['React'])
    }
      
  }
  render() {
    return (
      <div>
          <div className="PageTitle">React Interview Questions</div>
          <br/>
          <Suspense fallback={<div>Loading React Content...</div>}>
            <LoadContent data={this.props.Courses[Courses.React.value]}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReactPage);