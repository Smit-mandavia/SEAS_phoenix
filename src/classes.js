class Events {
  constructor(eventName, eventId, organizerId, tokenfees) {
    this.timestamp = Date.now();
    this.eventName = eventName;
    this.eventId = eventId;
    this.orgId = organizerId;
    this.tokenPrice = tokenfees;
  }
}

class Organizer {
  constructor(organizerName, organizerId, events) {
    this.organizerName = organizerName;
    this.organizerId = organizerId;
    this.events = events;
  }
}

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }
}

class Customer {
  constructor(customerName, customerUserName) {
    this.customerName = customerName;
    this.customerUserName = customerUserName;
  }
}

class NGO {
  constructor(NGOName, NGOId, events, donationPercent) {
    this.donationPercent = donationPercent;
    this.events = events;
    this.NGOId = NGOId;
    this.NGOName = NGOName;
  }
}
