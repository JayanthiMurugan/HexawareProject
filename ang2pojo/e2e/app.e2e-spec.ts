import { BDMAngularWebAppPage } from './app.po';

describe('bdmangular-web-app App', function() {
  let page: BDMAngularWebAppPage;

  beforeEach(() => {
    page = new BDMAngularWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
