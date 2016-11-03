var expect = require('expect');

var {generateMessage} = require('./message');

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
