describe('jest Hook', ()=> {
    beforeAll(()=> {
        console.log('before all case test');
    })
    beforeEach(()=> {
        console.log("before Each case test");

    })
    test('to not equal', ()=> {
        expect(1).not.toBe(2);
    })
    test('to equal', ()=> {
        expect(1).toBe(1);
    })
    afterAll(()=> {
        console.log("affter Allllll");
    })
    afterEach(()=> {
        console.log('affterEach');
    })
})