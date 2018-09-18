const expect = require('expect');

const {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message obejct', () => {
        let from = 'snir';
        let text = 'How are you?';

        let message = generateMessage(from, text)

        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text})
    })
});