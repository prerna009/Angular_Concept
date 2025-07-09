import { AppendPipe } from '../pipes/append.pipe';

describe('AppendPipe', () => {
  it('create an instance', () => {
    const pipe = new AppendPipe();
    expect(pipe).toBeTruthy();
  });
});
