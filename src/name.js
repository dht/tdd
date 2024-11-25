function analyzeName(name) {
  const parts = name.split(' ');

  const len = parts.length;

  const firstName = parts[0];
  let middleName = '';
  const lastName = parts[len - 1];

  if (len === 3) {
    middleName = parts[1];
  }

  return {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  };
}

module.exports = {
  analyzeName,
};
