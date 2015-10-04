# MicroClientModel
micro model in es6 for client.

## Getting Started

```
$ npm install micro-client-model
```

```javascript
import MicroClientModel from 'micro-client-model';
```

## API

- defaults
- set
- get
- dispatchChange
- addChangeListener
- removeChangeListener

## Options

```javascript
let options = {
  defaults: {},
  localStorage: ture, // bool(default: true)
};

new SomeModel(options);
```

## Example

```javascript
import MicroClientModel from 'micro-client-model';

class SomeModel extends MicroClientModel {
  constructor() {
    super({
      defaults: { message: 'Hello MicroModel!' },
    });
  }
}
export default new SomeModel();
```
