import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money given", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });
});


describe("max sugar allowed", () => {
  it("shouldnt allow more than 6 sugar cubes", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 7, "small");
    expect(machine.serve(drink, 2, false, 10)).toBe("Error: too much sugar");
  });
});
  it("should add 0.2 to the price if we want milk", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, true, 0, "large");
    expect(machine.serve(drink, 3.2, false, 10)).toBe("Serving Coffee (large)");
  });
  it("should add 0.1 to the price for every cube of sugar if you have more than 2 ", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 3, "medium");
    expect(machine.serve(drink, 2.6, false, 10)).toBe("Serving Coffee (medium)");
  });    
  it("loyalty card should give you every 5th drink for free", () => {
    const machine = new CoffeeMachine();
 
    const drink = new Drink("Coffee", 2, false, 2, "medium");
    machine.serve(drink, 2.5, true, 10);
    machine.serve(drink, 2.5, true, 10);
    machine.serve(drink, 2.5, true, 10);
    machine.serve(drink, 2.5, true, 10);
    expect(machine.serve(drink, 2.5, true, 10)).toBe("Serving Coffee (medium) with change 2.50");
  });  
  it("should sell drink 20% cheaper during happy hours", () => {
    const machine = new CoffeeMachine();
 
    const drink = new Drink("Coffee", 2, false, 2, "medium");
 
    expect(machine.serve(drink, 2.5, false, 16)).toBe("Serving Coffee (medium) with change 0.50");
  });  
  it("should return error if cost is less than 0", () => {
    const machine = new CoffeeMachine();
 
    const drink = new Drink("Coffee", -1, false, 0, "small");
 
    expect(machine.serve(drink, 2, false, 10)).toBe("Error: invalid price");
  });  


