import {testMethod} from './test';

jest.mock('./test');

test('example', () => {
   testMethod.mockReturnValue(true);
   expect(true).toBeTruthy();
});
