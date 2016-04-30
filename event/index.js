/*
 * index.js
 */
var events = require('events'); // module 'events' gets retrieved from local node_modules
var EventEventEmitter = require(__dirname+'/eventemitter.js');

/**
 * Create a new Event that let users create sub-event.
 * @return {Event}
 */
function Event() { }

/**
 * Create a new EventEventEmitter object.
 * @return {EventEventEmitter}
 */
Event.prototype.eventemitter = function() {
  this._eventEventEmitter = new EventEventEmitter;
  this._eventEventEmitter.setevenemitter(events.EventEmitter);
  return EventEventEmitter();
}

module.exports = Event;

//var EventEmitter = require('events').EventEmitter;