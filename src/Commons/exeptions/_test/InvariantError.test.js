const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
  it('shoult creat an error correctly', () => {
    const invariantError = new InvariantError('error an occurs');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('error an occurs');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
