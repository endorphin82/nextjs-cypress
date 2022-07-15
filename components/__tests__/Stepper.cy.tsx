import {Stepper} from "../Stepper";

describe('<Stepper>', () => {

// Set up some constants for the selectors
  const counterSelector = '[data-cy=counter]'
  const incrementSelector = '[aria-label=increment]'
  const decrementSelector = '[aria-label=decrement]'

  it('stepper should default to 0', () => {
    // Arrange
    cy.mount(<Stepper />)
    // Assert
    cy.get(counterSelector).should('have.text', '0')
  })

  it('when the increment button is pressed, the counter is incremented', () => {
    // Arrange
    cy.mount(<Stepper/>)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '1')
  })

  it('when the decrement button is pressed, the counter is decremented', () => {
    // Arrange
    cy.mount(<Stepper/>)
    // Act
    cy.get(decrementSelector).click()
    // Assert
    cy.get(counterSelector).should('have.text', '-1')
  })

  it('supports an "initial" prop to set the value', () => {
    // Arrange
    cy.mount(<Stepper initial={100}/>)
    // Assert
    cy.get(counterSelector).should('have.text', '100')
  })

  it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
    cy.mount(<Stepper initial={100} />)
    cy.get(counterSelector).should('have.text', '100')
    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text', '101')
    cy.get(decrementSelector).click().click()
    cy.get(counterSelector).should('have.text', '99')
    cy.get(counterSelector).dblclick()
  })

  it('clicking + fires a change event with the incremented value', () => {
    // Arrange
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper onChange={onChangeSpy} />)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })

})