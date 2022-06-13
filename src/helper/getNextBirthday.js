const getNextBirthday = (sortedBirthdays) => {
  const today = new Date();
  const removePastBirthdays = sortedBirthdays
    .map((singlePerson) => {
      const birthdayToDate = new Date(singlePerson.birthday).setFullYear(2022);
      if (birthdayToDate > today) {
        return singlePerson;
      }
      return null;
    })
    .filter((x) => x);
  return removePastBirthdays.filter(
    (x) =>
      new Date(x.birthday).setFullYear(2022) ===
      new Date(removePastBirthdays[0].birthday).setFullYear(2022)
  );
};

export default getNextBirthday;
