var self = this;

/**
 * Create a new EventEmitter that let users create sub-eventemitter.
 * @return {EventEmitter}
 */
function EventEmitter() {
  self._eventemitter = {};
  self = self._eventemitter; // set self to eventemitter
}

EventEmitter.prototype.eventemitter = function() {
  return self._eventemitter;
}

EventEmitter.prototype.seteventemitter = function(fnOrValue) {
  self._eventemitter = fnOrValue;
}

module.exports = EventEmitter;
