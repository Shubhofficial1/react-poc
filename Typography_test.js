Feature("Typography Component");

Scenario("Check Typography Texts", ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".heading");
  I.see("Explore Your Next Adventure Now", ".heading");
  I.see("Plan Your Next Trip", ".title1");
  I.see("Trending now", ".title2");
  I.see("Subscribe to our newsletter", ".title3");
  I.see("2020-23 All Rights Reserved 🚀", ".footer-text");
});
