Feature("Form Component");

Scenario("Check Form Submission", ({ I }) => {
  I.amOnPage("/");
  I.fillField("//input[@id=':r1:']", "admin");
  I.fillField("//input[@id=':r3:']", "password");
  I.click("Submit");
});
