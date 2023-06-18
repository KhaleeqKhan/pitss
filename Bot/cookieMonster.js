const Selenium = require('selenium-webdriver');

async function cookieHunt() {
  const driver = await new Selenium.Builder().forBrowser('firefox').build();

  //Navigiert auf die Seite
  await driver.get('http://localhost:9080/')

  //Naviegiert zum IFrame und clickt den Werbe Link
  await driver.switchTo().frame(0);
  const werbeButton = await driver.wait(Selenium.until.elementLocated(Selenium.By.id('werbe-link')), 10000);
  await werbeButton.click();

  //Füllt das Formular aus und sendet es  
  const name = await driver.wait(Selenium.until.elementLocated(Selenium.By.id('name')), 10000);
  await name.sendKeys('Selenium');
  const address = await driver.wait(Selenium.until.elementLocated(Selenium.By.id('address')), 10000);
  await address.sendKeys('Hochschule Cologne');
  const rating = await driver.wait(Selenium.until.elementLocated(Selenium.By.id('rating')), 10000);
  await rating.sendKeys('1');
  
  const submit = await driver.wait(Selenium.until.elementLocated(Selenium.By.id('form')), 10000);
  await submit.submit();
}
cookieHunt()