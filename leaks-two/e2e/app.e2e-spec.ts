import { LeaksTwoPage } from './app.po';

describe('leaks-two App', () => {
  let page: LeaksTwoPage;

  beforeEach(() => {
    page = new LeaksTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
