import { render, screen, within, fireEvent } from "@testing-library/react";
import Dropdown from "../components/Dropdown";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test("renders Dropdown component", () => {
  render(<Dropdown dropdownItems={items} />);
  const dropdownComponent = screen.getByTestId("dropdown");
  const firstElement = within(dropdownComponent).getByTestId("firstElement");
  expect(firstElement.textContent).toBe("01");
});

test("change value with click", async () => {
  render(<Dropdown dropdownItems={items} />);
  const dropdownComponent = screen.getByTestId("dropdown");
  const firstElement = within(dropdownComponent).getByTestId("firstElement");
  const anotherElement = within(dropdownComponent).getByText("0" + items[4]);
  fireEvent.click(anotherElement);
  const updatedElement = within(dropdownComponent).findByTestId("firstElement");
  expect((await updatedElement).textContent).toBe("05");
});

test("change value with keypress 'KeyDown'", async () => {
  render(<Dropdown dropdownItems={items} />);
  const dropdownComponent = screen.getByTestId("dropdown");
  const firstElement = within(dropdownComponent).getByTestId("firstElement");
  const anotherElement = within(dropdownComponent).getByText("0" + items[4]);
  fireEvent.keyUp(dropdownComponent, {
    key: "ArrowDown",
    code: "ArrowDown",
    charCode: 40,
  });
  const updatedElement = within(dropdownComponent).findByTestId("firstElement");
  expect((await updatedElement).textContent).toBe("02");
});

test("change value with keypress 'KeyUp'", async () => {
  render(<Dropdown dropdownItems={items} />);
  const dropdownComponent = screen.getByTestId("dropdown");
  const firstElement = within(dropdownComponent).getByTestId("firstElement");
  const anotherElement = within(dropdownComponent).getByText("0" + items[4]);
  fireEvent.keyUp(dropdownComponent, {
    key: "ArrowUp",
    code: "ArrowUp",
    charCode: 38,
  });
  const updatedElement = within(dropdownComponent).findByTestId("firstElement");
  expect((await updatedElement).textContent).toBe("01");
});
