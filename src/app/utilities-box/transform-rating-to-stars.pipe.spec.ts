import { TransformRatingToStarsPipe } from './transform-rating-to-stars.pipe';

describe('TransformRatingToStarsPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformRatingToStarsPipe();
    expect(pipe).toBeTruthy();
  });
});
