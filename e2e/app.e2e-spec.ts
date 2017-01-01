import { ClinicalWebPage } from './app.po';

describe('clinical-web App', function() {
  let page: ClinicalWebPage;

  beforeEach(() => {
    page = new ClinicalWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
