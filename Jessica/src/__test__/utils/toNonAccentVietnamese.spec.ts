import { toNonAccentVietnamese } from '../../app/utils/toNonAccentVietnamese';

describe('test file toNonVietnamese', ()=> {
    test('english only', ()=> {
        expect(toNonAccentVietnamese('toi')).toBe('toi'); 
    })
    test('toNone', ()=> {
        expect(toNonAccentVietnamese("Nguyễn Minh Phương")).toBe('Nguyen Minh Phuong');
    })
})