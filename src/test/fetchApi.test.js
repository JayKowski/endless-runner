import { scorePostApi } from './mockApi';

describe('It should generate API requests to remote server', () => {
  test('It should return a successful result message', () => {
    scorePostApi('kowski', 10).then((data) => {
      expect(data).toEqual({ result: 'Leaderboard score created correctly.' });
    });
  });
  test('It should return a successful result message', () => {
    scorePostApi('Kowski', '506').then((data) => {
      expect(data).toEqual({
        result: 'Leaderboard score created correctly.',
      });
    });
  });
  test('It should display error message on invalid user data submission', () => {
    scorePostApi('', 10).then((data) => {
      expect(data).toEqual({
        message: 'You need to provide a valid user for the score',
      });
    });
  });
  test('It should display error message on invalid user data submission', () => {
    scorePostApi('', '0').then((data) => {
      expect(data).toEqual({
        message: 'You need to provide a valid user for the score',
      });
    });
  });
});
