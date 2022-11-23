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

  llenarCampocss(css: string, txt: string){
    var el = element(by.css(css));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.sendKeys(txt);
  }

  llenarCampo(id: string, txt: string){
    var el = element(by.id(id));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.sendKeys(txt);
  }
}