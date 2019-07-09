import { attendees } from "./Attendees";

const AttendeeAPI = {
  getAllAttendees() {
    return Promise.resolve(attendees);
  },

  getAttendee(id) {
    const result = attendees.find((attendee) => attendee.id === id);
    return Promise.resolve(result);
  }
}

export default AttendeeAPI;