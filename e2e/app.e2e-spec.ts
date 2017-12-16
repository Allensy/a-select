import { UiSelectPage } from './app.po';

describe('ui-select App', () => {
  let page: UiSelectPage;

  beforeEach(() => {
    page = new UiSelectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
