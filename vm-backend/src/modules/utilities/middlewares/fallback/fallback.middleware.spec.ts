import { FallbackMiddleware } from './fallback.middleware';

describe('FallbackMiddleware', () => {
  it('should be defined', () => {
    expect(new FallbackMiddleware()).toBeDefined();
  });
});
