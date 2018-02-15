import { AppPage } from './app.po';

describe('pfe App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });
});
