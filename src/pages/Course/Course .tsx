import { CourseWrapper, Title, ListItem} from "./styles";
import { lessonsData } from "./data";
import { v4 } from "uuid";

function Course() {

    const lessons =lessonsData.map((lesson:string)=>{
        return <ListItem key={v4()}>{lesson}</ListItem>
    })
    return (
        <CourseWrapper>
            <Title>React Lessons
            {lessons}
            </Title>
        </CourseWrapper>
    )
}

export default Course;
