import { AnAgmPage } from './app.po';

describe('an-agm App', () => {
  let page: AnAgmPage;

  beforeEach(() => {
    page = new AnAgmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
