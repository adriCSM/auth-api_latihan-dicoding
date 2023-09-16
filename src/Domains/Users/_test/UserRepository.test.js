const UserRepository = require('../UserRepository');

describe('UserRepository Interface', () => {
  it('throw error when invoke abstract behavior', async () => {
    // Arange
    const userRepository = new UserRepository();

    // Action and Assert

    await expect(userRepository.addUser({})).rejects.toThrowError(
      'USER_REPOSITORY.METHOD_NOT_IMPLEMENTED',
    );
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError(
      'USER_REPOSITORY.METHOD_NOT_IMPLEMENTED',
    );
  });
});
