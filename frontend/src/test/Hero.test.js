import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

//Test suite for Hero component
describe('Hero component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });
        test('renders signup button', () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', { name: '/signup now/i' });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveclass('btn-primary');
    });
});