function btn() {
  const { value } = document.getElementById('text');
  const ageElement = document.getElementById('age');
  const [year, month, day] = value.split('-');

  const current = new Date();

  const currentYear = current.getFullYear();
  const trueage = currentYear - parseInt(year, 10);
  const currentMonth = current.getMonth();

  if (parseInt(year, 10) === currentYear) {
    ageElement.innerHTML = `You are just ${parseInt(month, 10)} month with ${parseInt(day, 10)} day`;
  } else if (parseInt(year, 10) < currentYear) {
    const trueMonth = Math.abs(currentMonth - parseInt(month, 10)) - 1;
    if (trueMonth === 0) {
      ageElement.innerHTML = `Your are ${trueage} year old`;
    } else {
      ageElement.innerHTML = `Your age is ${trueage} year, ${trueMonth} month`;
    }
  } else {
    ageElement.innerHTML = 'Please enter a valid age';
  }
}
btn();
