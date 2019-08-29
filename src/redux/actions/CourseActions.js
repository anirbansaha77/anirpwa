
import { fetchStaticData }  from '../../Utility/fetchStaticData';
import Enums from '../../Data/CourseUtility/CourseEnum';
import urls from '../../Data/CourseUtility/CourseURLs'

export function getCourseData(course) {
    return(dispatch=> {
        let url = getCourseUrl(course);
        fetchStaticData(url).then(res => {
            let payload = {};
            payload[course] = res;
            dispatch({ type: 'UPDATE_COURSE', payload });
        })
    })
    
}

function getCourseUrl(course) {
    return urls[course];
}