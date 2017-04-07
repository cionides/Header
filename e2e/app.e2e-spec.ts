import { HeaderPage } from './app.po';

describe('header App', () => {
  let page: HeaderPage;

  beforeEach(() => {
    page = new HeaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
