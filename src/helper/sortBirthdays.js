const sortBirthdays = (birthdays) => {
  if (!birthdays) {
    return [{}];
  }
  const sortedBirthdays = birthdays.sort((a, b) => {
    const aBirthday = new Date(a.birthday).setFullYear(2022);
    const bBirthday = new Date(b.birthday).setFullYear(2022);
    return aBirthday > bBirthday ? 1 : -1;
  });
  return sortedBirthdays;
};

export default sortBirthdays;
