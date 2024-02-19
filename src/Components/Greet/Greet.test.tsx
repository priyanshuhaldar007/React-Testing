/*
 * Greet should render the text hello and if any name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('greet renders correctly',()=>{
    render(<Greet/>)
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
})

// test('greet renders with name',()=>{
//     const name = 'vishwas'
//     render(<Greet name={name}/>);
//     const textElement = screen.getByText(`Hello ${name}`);
//     expect(textElement).toBeInTheDocument();
// })