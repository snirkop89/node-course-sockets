const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message')

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let latitude = 30;
        let longtitude = 50;
        let from = 'snir';
        let url = `https://www.google.com/maps?q=${latitude},${longtitude}`;

        let message = generateLocationMessage(from, latitude, longtitude)
    
        const regex = new RegExp(`${latitude},${longtitude}`);
        const expected =  expect.stringMatching(regex);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.url).toEqual(expected);
        // expect(message.url).toEqual(url);
    });
})