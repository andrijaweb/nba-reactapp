export function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

export function getWeekdayAndDate(date) {
  const dayInMonth = date.getDate();
  const weekDay = date.getDay();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInWeek = days.at(weekDay);

  return { dayInMonth, dayInWeek };
}

export const pastSevenDays = Array.from({ length: 7 }, (_, i) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - i);

  return currentDate;
});

export function getFormatedCurDate(curDate) {
  const formatedCurDate = new Date(curDate);
  const options = { month: "long", day: "numeric" };
  return formatedCurDate.toLocaleDateString("en-US", options);
}
