const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db);

  it('should call the spies correctly', () => {
    let spy = expect.createSpy();
    spy('Jim', 25);
    expect(spy).toHaveBeenCalledWith('Jim', 25);
  })

  it('should call saveUser', () => {
    let email = 'jim@mail.com';
    let password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });

  });
});
