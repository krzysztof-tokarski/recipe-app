import { TransformToUpperCasePipe } from './transform-to-upper-case.pipe';

describe('TransformToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
