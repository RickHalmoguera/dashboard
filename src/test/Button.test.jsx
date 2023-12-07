import "@testing-library/jest-dom";
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonStyled } from "../components/Button/ButtonStyled"

describe("ButtonStyled", () => {
  test("renders with the correct background color and text color", () => {
    const bgColor = "#FFF"
    const textColor = "#000"

    const { getByText } = render(
      <ButtonStyled $bg={bgColor} $fc={textColor}>
        Click me
      </ButtonStyled>
    )

    const button = getByText("Click me")

    expect(button).toHaveStyle(`background-color: ${bgColor}`)
    expect(button).toHaveStyle(`color: ${textColor}`)
  })

})
