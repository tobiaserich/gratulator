const calcAge = (birthday) => {
  const dateOfBirth = new Date(`${birthday}`);
  const currentDate = new Date();
  const difference = Math.abs(currentDate - dateOfBirth);
  const result = Math.round(difference / (1000 * 3600 * 24 * 360));
  dateOfBirth.setFullYear(2022);
  const hadBirthday = currentDate > dateOfBirth;
  return hadBirthday ? result - 1 : result;
};

export default calcAge;
