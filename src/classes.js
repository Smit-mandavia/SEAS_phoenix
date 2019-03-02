class Events {
  constructor(eventName, eventId, orgId, tokenPrice) {
    this.timestamp = Date.now();
    this.eventName = eventName;
    this.eventId = eventId;
    this.orgId = orgId;
    this.tokenPrice = tokenPrice;
  }
}

class Organizer {
  constructor(organizerName, organizerId, events) {
    this.organizerName = organizerName;
    this.organizerId = organizerId;
    this.events = events;
  }
}
