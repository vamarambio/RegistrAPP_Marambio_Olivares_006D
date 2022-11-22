import { browser, by, element, ExpectedConditions} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }
  
  clickBoton(id: string){
    var el = element(by.id(id));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}