import { CountDownWebPage } from './app.po';

describe('count-down-web App', () => {
  let page: CountDownWebPage;

  beforeEach(() => {
    page = new CountDownWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
