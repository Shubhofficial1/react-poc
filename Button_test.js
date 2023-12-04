Feature("Button");

Scenario('Check if "Explore" text appears on the button ', ({ I }) => {
  I.amOnPage("/");
  I.see("Explore", { css: "button.cta" });
});
//
