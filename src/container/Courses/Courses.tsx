import Card from "../../components/CoursesCard/Card";
import courses1 from "../../assets/course1.png";
import { Cards, Container } from "./styles";

export default function Courses() {
  return (
    <Container className="courses-container">
      <div>
        <h1>Our courses</h1>
      </div>
      <Cards>
        <Card
          image={courses1}
          text="STRIKING"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo."
        />

        <Card
          image={courses1}
          text="STRIKING"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo."
        />

        <Card
          image={courses1}
          text="STRIKING"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo."
        />
      </Cards>
    </Container>
  );
}
