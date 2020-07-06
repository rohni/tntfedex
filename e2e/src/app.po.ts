import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('app-root signup-form header div.header')
    ).getText() as Promise<string>;
  }

  getById(id): ElementFinder {
    return element(by.css(`#${id}`));
  }

  getSubmitButton(): ElementFinder {
    return element(by.css('button[type="submit"]'));
  }

  fillValue(control: ElementFinder, value): void {
    control.sendKeys(value);
  }

  getErrors(name: string) {
    return element
      .all(by.css('input#firstName + ul.errors li.error'))
      .map((li) => li.getText())
      .then(
        (errors) => (
          console.log(errors), errors.map((err: string) => err.trim())
        )
      );
  }
}
