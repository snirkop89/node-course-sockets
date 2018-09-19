const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        expect(isRealString(33)).toBe(false);
        expect(isRealString({name: 'new'})).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('    ')).toBe(false);
    });

    it('should allow strings with non-space chracthers', () => {
        expect(isRealString('my name is morgan')).toBe(true);
    });
});