// через document.querySelector звертаємось до селектора .form__button
// через onclick отримуємо форму в ручну
document.querySelector('.form__button').onclick = () => {
  // заносимо її в змінну form череp document.getElementById
  const form = document.getElementById('form')
  // якщо валідність коректна відправляємо форму
  if (form.reportValdity()) {
    form.submit()
  }
  //   якщо валідність не коректна очищаємо всі поля
  else {
    form.reset()
  }
}
