const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', done => {
    utils.asyncAdd(3, 4, sum => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });
});


it('should set first name and last name', () => {
  let user = { location: 'Toronto', age: 25 };
  let res = utils.setName(user, 'Greg Answer');
  expect(res).toInclude({
    firstName: 'Greg',
    lastName: 'Answer',
  });
});
