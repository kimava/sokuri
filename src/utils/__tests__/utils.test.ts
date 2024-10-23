import { describe } from 'node:test';
import { isActivePath } from '../utils';

describe('isActivePath', () => {
  it('returns true when pathName starts with href', () => {
    expect(isActivePath('plogging/crew/dfae-a', 'plogging')).toBe(true);
  });

  it('returns false when pathName does not start with href', () => {
    expect(isActivePath('mypage/plogging', 'plogging')).toBe(false);
  });
});
