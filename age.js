function btn() {
  const element = document.getElementById('text');
  const { value } = element;
  const ageElement = document.getElementById('age');
  const [year, month, day] = value.split('-');

  const current = new Date();
  const currentYear = current.getFullYear();
  const trueage = currentYear - parseInt(year, 10);
  const currentMonth = current.getMonth();
  const currentday = current.getDay();
  const trueMonth = Math.abs(currentMonth - parseInt(month, 10)) - 1;
  const trueDay = Math.abs(currentday - parseInt(day, 10));

  if (parseInt(year, 10) === currentYear) {
    if (trueMonth === 0) {
      ageElement.innerHTML = 'You  born in this month';
    } else {
      ageElement.innerHTML = `You are just ${trueMonth} month with ${parseInt(trueDay, 10)} day`;
    }
  } else if (parseInt(year, 10) < currentYear) {
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