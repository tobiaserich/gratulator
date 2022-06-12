const calcAge = (birthday) => {
  const dateOfBirth = new Date(`${birthday}`);
  const currentDate = new Date();
  const difference = Math.abs(currentDate - dateOfBirth);
  const result = Math.round(difference / (1000 * 3600 * 24 * 360));
  return result;
};

export default calcAge;
