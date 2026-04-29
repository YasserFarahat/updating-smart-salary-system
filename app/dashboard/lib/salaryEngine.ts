export function calculateSalary(data: any) {
  const {
    experience,
    education,
    skillsScore,
    interviewScore,
    testScore,
    locationFactor,
    minSalary,
    maxSalary
  } = data;

  const exp = Math.min(experience / 10, 1);
  const edu =
    education === "PhD" ? 1 :
    education === "Master" ? 0.8 : 0.6;

  const skill = skillsScore / 100;
  const interview = interviewScore / 100;
  const test = testScore / 100;

  const score =
    exp * 0.25 +
    edu * 0.20 +
    skill * 0.20 +
    interview * 0.15 +
    test * 0.10 +
    locationFactor * 0.10;

  const salary =
    minSalary + score * (maxSalary - minSalary);

  return { salary, score };
}
