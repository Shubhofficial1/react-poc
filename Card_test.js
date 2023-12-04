Feature("Card Component");

Scenario("Check Card Rendering and Read More Link", ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".MuiCard-root");

  I.see("Majestic Ladakh Wonders", ".MuiTypography-h6");
  I.see("India", ".MuiTypography-subtitle1");

  I.click("Read More");

  I.seeInCurrentUrl("/places/majestic-ladakh-wonders");
});
