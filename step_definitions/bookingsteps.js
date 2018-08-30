const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');



Given(/^user on booking.com website$/, () => {
  return client
    .url('http://booking.com')
    .useXpath()
    .waitForElementVisible("//body", 6000);
});
When(/^user enters location as (.*?)$/, (locationName) => {
  return client
    .useCss()
    .setValue('#ss', locationName);
});
When(/^user selects checkin date$/, () => {
  client.click('i.sb-date-field__icon-text');
  client.pause(3000);
  return client
    .useXpath()
    .click("(//span[@class='c2-button-inner'])[2]")
    .pause(3000);
});
When(/^user enters day after three months$/, () => {
  return client
 .useXpath()
   .click("(//span[@class='c2-button-inner'])[2]")
   .pause(3000)
   .click("//td[@data-id='1543104000000']/span[@class='c2-day-inner']");
 });
 When(/^user selects checkout date$/, () => {
  return client
   .pause(3000)
  .click("(//td[@data-id='1543190400000']/span[@class='c2-day-inner'])[2]");
});
When(/^when user clicks on search$/, () => {
  return client
    .useCss()
    .click('button.sb-searchbox__button  ');
});
Then(/^user should be able to see result listings$/, () => {
  return client.assert.title("Booking.com: Hotels in Limerick. Book your hotel now!")
});
When(/^user selects (.*?) from side$/, (filterOption) => {
  if (filterOption == "5 star") {
    client
      .useXpath()
      .click("//a[@data-id='class-5']");
  } else if (filterOption == "Sauna") {
    client
      .useXpath()
      .click("//a[@data-id='popular_activities-10']");
  }
  return client.pause(4000);
});
Then(/^user should be able to see (.*?) in the result listings$/, (hotleName) => {
  if (hotleName == "The Savoy Hotel") {
    return client.assert.containsText("//a[@class='hotel_name_link url']//span", hotleName);
  } else if (hotleName == "Limerick Strand Hotel") {
    return client.assert.containsText("//a[@class='hotel_name_link url']//span[contains(text(),'Limerick Strand Hotel')]", hotleName);
  }

});
Then(/^user should not be able to see (.*?) in the result listings$/, (hotleName) => {
  client.assert.elementNotPresent("//a[@class='hotel_name_link url']//span[contains(text(),'George Limerick Hotel')]");
  return client.end();
});
