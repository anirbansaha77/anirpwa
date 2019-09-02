import { Courses } from './CourseEnum';
// const JavaScript = Courses.JavaScript;
const urls = {
}
urls[Courses.JavaScript.value] = '/courses/javaScript/contents.json';
urls[Courses.React.value] = '/courses/react/contents.json';
urls[Courses.ES6.value] = '/courses/ES6/contents.json';

export default urls;