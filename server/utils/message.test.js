var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var test = {from: 'Alex', text: 'Some text goes here'};
    var message = generateMessage(test.from, test.text);

    expect(message).toInclude({
      from: test.from,
      text: test.text
    });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var lat = 45.5;
    var long = 25.875;
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
