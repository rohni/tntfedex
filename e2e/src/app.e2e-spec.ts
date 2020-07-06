import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Free Delivery Signup Form');
  });

  // happy flow run through
  it('should redirect to the success page when the form is submitted', () => {
    page.navigateTo();
    const firstName = page.getById('firstName');
    const surname = page.getById('surname');
    const email = page.getById('email');
    const password = page.getById('password');
    const passwordConfirm = page.getById('passwordConfirm');
    firstName.sendKeys('Bubba');
    expect(firstName.getAttribute('value')).toEqual('Bubba');
    surname.sendKeys('Gump');
    expect(surname.getAttribute('value')).toEqual('Gump');
    email.sendKeys('bubba@gump.com');
    expect(email.getAttribute('value')).toEqual('bubba@gump.com');
    const passVal = 'myFancyPassword';
    password.sendKeys(passVal);
    passwordConfirm.sendKeys(passVal);
    page.getSubmitButton().click();
    expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}signup-success`);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
