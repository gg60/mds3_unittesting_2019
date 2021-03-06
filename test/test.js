const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
    // Complete here
    expect(isAnagram(str1, str2)).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
    // Complete here
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    // Complete here
    expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    // Complete here
    expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        //Check if the user is Jeff
        // Complete here
        expect(user).toEqual('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        //Check if the user is Karen
        // Complete here
        expect(user).toEqual('Karen');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    // Complete here
    expect(2 + 2).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    // Complete here
    expect(2 + 2).not.toBe(5)
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    // Complete here
    excepte(function.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    // Complete here
    excepte(function.isNull()).toBeFalcy();
});

// toEqual
test('User should be Marc Antoine object', () => {
    // Complete here
    expect(function.createUser()).toEqual({
        "firstName": "Marc"
    });
});

// Less than and greater than
test('Should be under or equal 1000', () => {
    const load1 = 500;
    const load2 = 500;
    // Complete here
    expect(function.checkValue(load1)).toBeLessThanEqual(1000);
    expect(function.checkValue(load2)).toBeLessThanEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
    // Complete here
    expect("team").not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    // Complete here
    expect(usernames).toContain("admin");
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
    const data = await functions.fetchUser();
    // Complete here
    expect(data).toEqual("Leanne Graham");
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
    // Complete here
    expect(reverseString()).toBeDefined();
});

test('String reverses', () => {
    // Complete here
    expect(reverseString("mot").reverse()).toEqual("tom");
});

test('String reverses with uppercase', () => {
    // Complete here
    expect(reverseString("mot").reverse().uppercase()).toEqual("TOM");
});
