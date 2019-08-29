import React, { Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../redux/actions/CourseActions';
import './React.css';
const LoadContent = React.lazy(() => import ('../components/LoadContent'));
class ReactPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(!this.props.Courses['React']){
      console.log("notfound call api")
      this.props.actions.getCourseData("React");
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
            <LoadContent data={this.props.Courses['React']}/>
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