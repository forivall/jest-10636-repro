import { mockedFunction } from '../src/mymodule'
jest.mock('../src/mymodule', () => {
  return {
    mockedFunction: jest
      .fn<ReturnType<typeof mockedFunction>, Parameters<typeof mockedFunction>>().mockReturnValue(true)
   }
})

test('my function is mocked', () => {
  expect(mockedFunction()).toBeTruthy()
  expect(mockedFunction).toBeCalled()
})
