import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("Greet renders properly", ()=>{
    render(<Greet/>)
    const txtElement = screen.getByText("whats up");
    expect(txtElement).toBeInTheDocument();
});