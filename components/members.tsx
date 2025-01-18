import Member from "@/components/member";
import { members } from "@/data/members";

import {
  Section,
  SectionTitle,
  SectionSubtitle,
} from "@/components/styles/section";
import { Grid, GridElement } from "@/components/styles/grid";

export default function Members(): JSX.Element {
  const students = members.filter((_, index) => index !== 0);
  const studentsByYear = students.reduce(
    (acc: Record<number, typeof students>, student) => {
      const year = student.graduationYear;
      if (year) {
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(student);
      }
      return acc;
    },
    {},
  );

  return (
    <Section>
      <SectionTitle>所属研究員</SectionTitle>
      <div className="space-y-4">
        <SectionSubtitle>指導教員</SectionSubtitle>
        <Grid>
          <GridElement className="md:col-span-2">
            {members
              .filter((_, index) => index === 0)
              .map((member, index) => (
                <Member
                  key={index}
                  name={member.name}
                  nameRomaji={member.nameRomaji}
                  position={member.position}
                  image={member.image}
                  description={member.description}
                  github={member.github}
                />
              ))}
          </GridElement>
        </Grid>
      </div>
      <SectionSubtitle>研究生</SectionSubtitle>
      <div className="space-y-8">
        {Object.keys(studentsByYear)
          .sort()
          .map((year) => (
            <div key={year}>
              <div className="font-bold">{year}年卒業予定</div>
              <Grid>
                {studentsByYear[Number(year)]?.map((student, index) => (
                  <GridElement key={index}>
                    <Member
                      name={student.name}
                      nameRomaji={student.nameRomaji}
                      position={student.position}
                      image={student.image}
                      description={student.description}
                      github={student.github}
                    />
                  </GridElement>
                ))}
              </Grid>
            </div>
          ))}
      </div>
    </Section>
  );
}
