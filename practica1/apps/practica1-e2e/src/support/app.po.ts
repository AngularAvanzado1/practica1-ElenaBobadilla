export const getGreeting = () => cy.get('h1');
export const getTitle = () => cy.get('h2');
export const getRegions = () => cy.get('div.region');
export const getContinents = () => cy.get('div.continent');
export const getCountries = () => cy.get('div.country');
export const clickRegion = () => cy.get('a.link_region:first').click();
export const clickContinent = () => cy.get('a.link_continent:first').click();
export const waitLoadPage = () => cy.wait(1000);


