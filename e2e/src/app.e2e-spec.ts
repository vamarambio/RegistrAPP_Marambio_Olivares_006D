import { AppPage } from './app.po';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('Prueba: ', () => {
  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });

  beforeAll(() => {
    browser.manage().window().maximize();
  });

  it('No hay duplicidad', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    page.clickBoton('create-button-login');
    await browser.sleep(page.tiempo());

    element(by.css('ion-input[id="nombre-input-create"] input')).sendKeys('Nombre Profesora');
    element(by.css('ion-input[id="correo-input-create"] input')).sendKeys('n.profesora@profesor.duoc.cl');
    element(by.css('ion-input[id="contra-input-create"] input')).sendKeys('1234');
    element(by.css('ion-input[id="rcontr-input-create"] input')).sendKeys('1234');
    page.clickBoton('regist-boton-create');
    await browser.sleep(page.tiempo());
    
    // Vuelve al login
    
    page.clickBoton('create-button-login');
    await browser.sleep(page.tiempo());
  
    element(by.css('ion-input[id="nombre-input-create"] input')).sendKeys('Otro Nombre Profesor');
    element(by.css('ion-input[id="correo-input-create"] input')).sendKeys('n.profesora@profesor.duoc.cl');
    element(by.css('ion-input[id="contra-input-create"] input')).sendKeys('123456');
    element(by.css('ion-input[id="rcontr-input-create"] input')).sendKeys('123456');
    page.clickBoton('regist-boton-create');
  
    //expect(element(by.css('app-create-user .alert-title sc-ion-alert-md')).getText()).toContain('Este correo ya existe');
    expect(await element(by.css('ion-alert[class="sc-ion-alert-md-h sc-ion-alert-md-s md hydrated"]')).isPresent()).toBe(true);
    
  });


  it('Crear cuenta con contrasenas incorrectas', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    
    page.clickBoton('create-button-login');
    await browser.sleep(page.tiempo());

    element(by.css('ion-input[id="nombre-input-create"] input')).sendKeys('Nombre Profesor');
    element(by.css('ion-input[id="correo-input-create"] input')).sendKeys('n.profesor@profesor.duoc.cl');
    element(by.css('ion-input[id="contra-input-create"] input')).sendKeys('1234');
    element(by.css('ion-input[id="rcontr-input-create"] input')).sendKeys('1111');

    await browser.sleep(page.tiempo());
    page.clickBoton('regist-boton-create'); 

    expect(await element(by.css('ion-alert[class="sc-ion-alert-md-h sc-ion-alert-md-s md hydrated"]')).isPresent()).toBe(true);
    
  }); 


  it('Crear cuenta valida de profesor y acceder a ella', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    page.clickBoton('create-button-login');
    await browser.sleep(page.tiempo());

    element(by.css('ion-input[id="nombre-input-create"] input')).sendKeys('Nombre Profesor');
    element(by.css('ion-input[id="correo-input-create"] input')).sendKeys('nom.profesor@profesor.duoc.cl');
    element(by.css('ion-input[id="contra-input-create"] input')).sendKeys('123');
    element(by.css('ion-input[id="rcontr-input-create"] input')).sendKeys('123');
    
    page.clickBoton('regist-boton-create');

    //Vuelve a la pagina login

    await browser.sleep(page.tiempo());
    element(by.css('ion-input[id="correo-input-login"] input')).sendKeys('nom.profesor@profesor.duoc.cl');
    element(by.css('ion-input[id="contra-input-login"] input')).sendKeys('123');

    page.clickBoton('confirm-button-login');
    await browser.sleep(page.tiempo());

    expect (await element(by.css('ion-label[id="inicio-profesor"]')).getText()).toEqual('Bienvenido/a Nombre Profesor');

  });

  it('Crear cuenta valida de estudiante y acceder a ella', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    page.clickBoton('create-button-login');
    await browser.sleep(page.tiempo());

    element(by.css('ion-input[id="nombre-input-create"] input')).sendKeys('Nombre Alumno');
    element(by.css('ion-input[id="correo-input-create"] input')).sendKeys('nombre.alumno@duocuc.cl');
    element(by.css('ion-input[id="contra-input-create"] input')).sendKeys('12345');
    element(by.css('ion-input[id="rcontr-input-create"] input')).sendKeys('12345');
    
    page.clickBoton('regist-boton-create');

    //Vuelve a la pagina login

    await browser.sleep(page.tiempo());
    element(by.css('ion-input[id="correo-input-login"] input')).sendKeys('nombre.alumno@duocuc.cl');
    element(by.css('ion-input[id="contra-input-login"] input')).sendKeys('12345');    
    page.clickBoton('confirm-button-login');
    await browser.sleep(page.tiempo());

    expect (await element(by.css('ion-label[id="inicio-student"]')).getText()).toEqual('Bienvenido/a Nombre Alumno');

  });

});