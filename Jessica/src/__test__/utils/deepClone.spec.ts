import { deepClone } from '../../app/utils/deepClone';

describe ('test suite file deeepClone', ()=> {
    test("test not equal", ()=> {
        expect(deepClone({
            name: "Phuong", 
            address: "Vietnam"
        })).not.toEqual({
            name: "Ngoc",
            address:"Vietnam"
        })
    }),
    test("test euqal Obj", ()=> {
        const obtTest = {
            name: "Anh", 
            age: 25,
            subject: {
                name: "math"
            }
        }
        const objResult = {
            name: "Anh", 
            age: 25,
            subject: {
                name: "math"
            }
        }
        expect(deepClone(obtTest)).toEqual(objResult)
    })
})