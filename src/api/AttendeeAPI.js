import { attendees } from "./Attendees";

const AttendeeAPI = {
  getAllAttendees() {
    return Promise.resolve(attendees);
  },
}

export default AttendeeAPI;