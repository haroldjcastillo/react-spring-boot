import {render, screen} from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import Consent from "./components/Consent";
import Login from "./components/Login";

jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: jest.fn(),
        useHistory: jest.fn(),
        useLocation: jest.fn()
    };
});

test('rendering consent component', () => {
    window.foo = "foo"
    const {queryByText } = render(
        <Consent />
    )
    expect(queryByText("Hello foo!")).toBeTruthy()
})

test('rendering login component', () => {
    window.bar = "bar"
    const {queryByText } = render(
        <Login />
    )
    expect(queryByText("Hello bar!")).toBeTruthy()
})