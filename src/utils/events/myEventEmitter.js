import { EventEmitter } from "events";

export const myEventEmitter = new EventEmitter();

export const pasangPenerima = (eventName, handler) =>
  myEventEmitter.on(eventName, handler);

export const copotPenerima = (eventName, handler) =>
  myEventEmitter.off(eventName, handler);
