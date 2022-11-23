import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Prueba ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  fit('h2', async  () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect (await element(by.css('app-login h2')).getText()).toEqual('Ingresar');
  });
  
  fit('ir a crear usuario', async  () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    page.clickBoton('createUser-button-login');

    browser.sleep(5000); 
    expect (await element(by.css('app-create-user h2')).getText()).toEqual('Crear Usuario');

  });
  
  
  it('login como estudiante', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    element(by.id("email-field-login")).sendKeys("est.estudiante@duocuc.cl");
    element(by.id("password-field-login")).sendKeys("e");
    page.clickBoton('confirmar-button-login');


    var ini = element(by.id("inicio-student"));
    expect(await ini.getText()).toEqual("Inicio");

  })

});
