# emitter-es6

> A JavaScript Emitter written in ES6.

## Usage
```js
import Emitter from 'Emitter';

let bus = new Emitter();

bus.emit('finish');

```

```js
import Emitter from 'Emitter';

class Foo extends Emitter {
  constructor() {
    super.constructor();
  }

  ...
};

let foo = new Foo();

foo.emit('finish');
```

## API

### Emitter#on(event, listener)
Adds a `listener` to the collection for a specified `event`.
- `event` - The name of the event you want to add.
- `listener` - Listener you want to add from given event.

```js
emitter.on('live', listener);
```

### Emitter#once(event, listener)
Adds a one time `listener` to the collection for a specified `event`. It will execute only once.
- `event` - The name of the event.
- `listener` - Listener you want to add from the given event.

```js
emitter.once('live', listener);
```

### Emitter#off(event, listener)
Removes a `listener` from the collection for a specified `event`.
- `event` - The name of the event.
- `listener` - Listener you want to remove from the given event.

```js
emitter.off('live', listener);
```

### Emitter#removeAllListeners(event)
Removes all `listeners` from the collection for a specified `event`.
- `event` - The name of the event you want to remove.

```js
emitter.removeAllListeners('live');
```

### Emitter#listeners(event)
Returns all `listeners` from the collection for a specified `event`.
- `event` - The name of the event.

```js
emitter.listeners('live');
```

### Emitter#emit(event, [arg1], [arg2], [...])
Execute each of the `listeners` collection in order with the given parameters.
- `event` - The name of the event you want to emit.
- `[args, ...]` - The given arguments.

```js
emitter.emit('live', 'data1', 'data2');
```

## Build

  npm run build


## Made with ❤
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
MIT license. Copyright © 2014.
