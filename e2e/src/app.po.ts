import { browser, by, element, ExpectedConditions} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  tiempo(){
    return 3000;
  }
  
  clickBoton(id: string){
    var el = element(by.id(id));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}