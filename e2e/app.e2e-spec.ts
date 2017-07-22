import { DROCKPage } from './app.po';

describe('drock App', () => {
  let page: DROCKPage;

  beforeEach(() => {
    page = new DROCKPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
