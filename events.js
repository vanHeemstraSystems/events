/*
 * events.js
 */
var EventsEvent = require(__dirname+'/event.js');

/**
 * Create a new Events that let users create sub-events.
 * @return {Events}
 */
function Events() { }

/**
 * Create a new EventsEvent object.
 * @return {EventsEvent}
 */
Events.prototype.utility = function() {
  return new EventsEvent();
}

module.exports = Events;
