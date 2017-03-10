import { LeaksThreePage } from './app.po';

describe('leaks-three App', () => {
  let page: LeaksThreePage;

  beforeEach(() => {
    page = new LeaksThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
