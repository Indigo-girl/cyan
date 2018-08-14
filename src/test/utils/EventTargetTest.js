import EventTarget from '../../logic/utils/EventTarget';

const eventHub = new EventTarget();

eventHub.on('foo', () => console.log('foo 1'));
eventHub.once('foo', () => console.log('foo once'));

eventHub.dispatchEvent({ type: 'foo' });
eventHub.dispatchEvent({ type: 'foo' });

var a = {
    detail: 'a detail'
}

var cb1 = function () {
    console.log(this.detail);
};

var cb2 = function () {
    console.log(this.detail);
}

eventHub.on('bar', cb1, a);
eventHub.on('bar', cb2, a);

eventHub.dispatchEvent({ type: 'bar' });
eventHub.off('bar', cb1);
eventHub.dispatchEvent({ type: 'bar' });
eventHub.targetOff(a);
eventHub.dispatchEvent({ type: 'bar' });