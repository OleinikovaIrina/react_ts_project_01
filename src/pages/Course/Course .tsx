import { CourseWrapper, Title,List} from "./styles";

function Course() {
    return (
        <CourseWrapper>
            <Title>React Lessons
            </Title>
             <List>
                <li>useState, useEffect – Hooks for state and side effects</li>
                <li>Forms and input handling – onChange, controlled and uncontrolled components</li>
                <li>CSS in React – inline styles, CSS Modules, styled-components</li>
            </List>
        </CourseWrapper>
    )
}

export default Course;
