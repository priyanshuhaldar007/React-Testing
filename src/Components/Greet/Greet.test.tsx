/*
 * Greet should render the text hello and if any name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', () => {

    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })
})
describe('Greet 2', () => {
    test('renders with name', () => {
        const name = 'vishwas'
        render(<Greet name={name} />);
        const textElement = screen.getByText(`Hello ${name}`);
        expect(textElement).toBeInTheDocument();
    })

})