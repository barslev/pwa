import authRoutes from '../../collections/AuthRoutes';
import { isShopLink, isProtector } from './handleLinks';

jest.mock('@shopgate/pwa-common/helpers/config', () => ({
  shopCNAME: 'm.example.com',
}));

describe('handleLinks helpers', () => {
  describe('isShopLink()', () => {
    const positives = [
      'http://foo.shopgate.com',
      'https://foo.shopgate.com',
      'http://foo.shopgate.com/page/cms',
      'https://foo.shopgate.com/page/cms',
      'https://m.example.com',
      'http://m.example.com',
      'http://m.example.com/page/cms',
      'https://m.example.com/page/cms',
      'https://M.ExamPle.com/page/CMS',
    ];

    const negatives = [
      'https://example.com/bar',
      'https://example.com',
      'http://shopgate.com/foo',
      'https://shopgate.com/foo',
      'https://www.shopgate.com',
      'http://www.shopgate.com',
      'http://example.com',
      'https://example.com',
      'https://example.com/page/cms',
    ];

    positives.forEach((href) => {
      it(`should return true for ${href} link`, () => {
        expect(isShopLink(href)).toBe(true);
      });
    });

    negatives.forEach((href) => {
      it(`should return false for ${href} link`, () => {
        expect(isShopLink(href)).toBe(false);
      });
    });
  });

  describe('isProtector()', () => {
    const PROTECTOR = '/protector';
    const PROTECTED = '/protected';

    beforeEach(() => {
      authRoutes.constructor();
      authRoutes.set('/protected_not_relevant', '/protector_not_relevant');
      authRoutes.set(PROTECTED, PROTECTOR);
    });

    it('should return true for a protector route', () => {
      expect(isProtector(PROTECTOR)).toBe(true);
    });

    it('should return false for a protected route', () => {
      expect(isProtector(PROTECTED)).toBe(false);
    });
  });
});

