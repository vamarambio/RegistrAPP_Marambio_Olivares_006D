import { AppPage } from './app.po';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('Prueba create-user: ', () => {
  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });

  beforeAll(() => {
    browser.manage().window().maximize();
  });

  it('No hay duplicidad', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
      page.clickBoton('create-button-login');

      page.llenarCampo("nombre-input-create", "Nombre Profesor");
      page.llenarCampo("correo-input-create", "n.profesor@profesor.duoc.cl");
      page.llenarCampo("contra-input-create", "1234");
      page.llenarCampo("rcontr-input-create", "1234");
      page.clickBoton('regist-boton-create');

      // Vuelve al login

      browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
        page.clickBoton('create-button-login');
  
        page.llenarCampo("nombre-input-create", "Nombre Profesor 2");
        page.llenarCampo("correo-input-create", "n.profesor@profesor.duoc.cl");
        page.llenarCampo("contra-input-create", "123");
        page.llenarCampo("rcontr-input-create", "123");
        page.clickBoton('regist-boton-create');
  
        expect(element(by.css('app-create-user .alert-title sc-ion-alert-md')).getText()).toContain('Este correo ya existe');
      });

    });

  });

  it('Crear cuenta con contrasenas incorrectas', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function(){
      page.clickBoton('create-button-login');

      page.llenarCampo("nombre-input-create", "Nombre Profesor");
      page.llenarCampo("correo-input-create", "n.profesor@profesor.duoc.cl");
      page.llenarCampo("contra-input-create", "1234");
      page.llenarCampo("rcontr-input-create", "1111");

      page.clickBoton('regist-boton-create');

      expect(await element(by.css('app-create-user .alert-title sc-ion-alert-md')).getText()).toEqual('Las contraseñas no coinciden');
    });

  }); 
  
  it('Crear cuenta valida de profesor y acceder a ella', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function(){
      page.clickBoton('create-button-login');

      page.llenarCampo("nombre-input-create", "Nombre Profesora");
      page.llenarCampo("correo-input-create", "nombre.profesora@profesor.duoc.cl");
      page.llenarCampo("contra-input-create", "12345");
      page.llenarCampo("rcontr-input-create", "12345");
      page.clickBoton('regist-boton-create');

      //Vuelve a la pagina login
      page.llenarCampo("correo-input-login", "nombre.profesora@profesor.duoc.cl");
      page.llenarCampo("contra-input-login", "12345");
      page.clickBoton('confirm-button-login');

      expect (await element(by.id('inicio-profesor')).getText()).toEqual('Bienvenido/a Nombre Profesora');
    });

  });

  it('Crear cuenta valida de estudiante y acceder a ella', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    element(by.id("email-field-login")).sendKeys("est.estudiante@duocuc.cl");
    element(by.id("password-field-login")).sendKeys("e");
    page.clickBoton('confirmar-button-login');


    var ini = element(by.id("inicio-student"));
    expect(await ini.getText()).toEqual("Inicio");

  })

});