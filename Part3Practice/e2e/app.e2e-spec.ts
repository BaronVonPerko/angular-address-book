import { AngularAddressBookPage } from './app.po';

describe('angular-address-book App', () => {
  let page: AngularAddressBookPage;

  beforeEach(() => {
    page = new AngularAddressBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
