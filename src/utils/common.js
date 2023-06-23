import dayjs from "dayjs";

export function generateTimeSlots(date, startTime, endTime, slotDuration) {
  const [startHours, startMinutes] = startTime?.split(":");
  const [endHours, endMinutes] = endTime?.split(":");

  const now = dayjs("2023-06-24");

  const startDateTime = now.set("hour", startHours).set("minute", startMinutes);
  const endDateTime = now.set("hour", endHours).set("minute", endMinutes);

  const timeSlots = [];
  let currentSlot = startDateTime;

  while (currentSlot.isSame(endDateTime) || currentSlot.isBefore(endDateTime)) {
    timeSlots.push(currentSlot);
    currentSlot = currentSlot.add(slotDuration, "minute");
  }

  return timeSlots;
}
