import 'babel/polyfill';
import MicroEmitter from 'micro-emitter';

const EVENT_CHANGE = 'CHANGE_STORE';

if (global) global.localStorage = global.localStorage || { getItem: () => { return '{}'; }, setItem: () => {} };

export default class MicroModel extends MicroEmitter {
  constructor(options) {
    super();
    this._localStorage = options.localStorage;
    this.attributes = this._loda() || options.defaults;
  }

  set(key, value) {
    this.attributes[key] = value;
    this.dispatchChange();
    if (this._localStorage) this._save();
    return this;
  }

  get(key) {
    return this.attributes[key];
  }

  _save() {
    const key = this.constructor.name;

    localStorage.setItem(key, JSON.stringify(this.attributes));
  }

  _load() {
    const key = this.constructor.name;

    return JSON.parse(localStorage.getItem(key));
  }

  // basic method
  dispatchChange() {
    this.emit(EVENT_CHANGE);
  }

  addChangeListener(listener) {
    this.addListener(EVENT_CHANGE, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(EVENT_CHANGE, listener);
  }
}
