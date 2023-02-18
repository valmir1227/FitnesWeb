import Title from "../../components/Title/Title";
import TimeTableCard from "../../components/TimetableCard/Card";
import bodyBuilding from "../../assets/body-building.png";
import weightLoss from "../../assets/size.png";
import cardio from "../../assets/run.png";
import yoga from "../../assets/yoga.png";
import body from "../../assets/body.png";
import karate from "../../assets/karate.png";
import boxing from "../../assets/boxing.png";
import aerobics from "../../assets/aerobics.png";
import { CardConTainer, Container, Text } from "./styles";

export default function Timetable() {
  return (
    <Container className="timatable-container">
      <Text>
        <h1>OUR TIMETABLE</h1>
      
      </Text>

      <CardConTainer>
        <TimeTableCard
          classroom="Weight Loss"
          image={weightLoss}
          time="06AM-08AM"
          trainer="Rachel Adam"
        />

        <TimeTableCard
          classroom="Cardio"
          image={cardio}
          time="08AM-10AM"
          trainer="Rachel Adam"
        />

        <TimeTableCard
          classroom="Yoga"
          image={yoga}
          time="10AM-12AM"
          trainer="Lefew D. Loee"
        />

        <TimeTableCard
          classroom="Fitness"
          image={body}
          time="12AM-01PM"
          trainer="Rachel Adam"
        />

        <TimeTableCard
          classroom="Karate"
          image={karate}
          time="04PM-06PM"
          trainer="Keaf Shen"
        />

        <TimeTableCard
          classroom="Boxing"
          image={boxing}
          time="06PM-07PM"
          trainer="Rachel Adam"
        />

        <TimeTableCard
          classroom="Aerobics & Skipping"
          image={aerobics}
          time="07PM-08PM"
          trainer="Lefew D. Loee"
        />

        <TimeTableCard
          classroom="Body Building"
          image={bodyBuilding}
          time="08PM-09PM"
          trainer="Rachel Adam"
        />
      </CardConTainer>
    </Container>
  );
}
