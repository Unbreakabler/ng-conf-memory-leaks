import { LeaksOnePage } from './app.po';

describe('leaks-one App', () => {
  let page: LeaksOnePage;

  beforeEach(() => {
    page = new LeaksOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
