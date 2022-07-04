const getNextBirthday = (sortedBirthdays) => {
  if (!sortedBirthdays) {
    return [];
  }

  const today = new Date();
  const findFutureBirthday = sortedBirthdays.find((singlePerson) => {
    const birthdayToDate = new Date(singlePerson.birthday).setFullYear(2022);
    if (birthdayToDate > today) {
      return singlePerson;
    }
  });
  console.log(findFutureBirthday);

  const filtered = sortedBirthdays.filter((x) =>
    findFutureBirthday
      ? new Date(x.birthday).setFullYear(2022) ===
        new Date(findFutureBirthday.birthday).setFullYear(2022)
      : new Date(x.birthday).setFullYear(2022) ===
        new Date(sortedBirthdays[0].birthday).setFullYear(2022)
  );
  console.log(filtered);
  return filtered;
};

export default getNextBirthday;
