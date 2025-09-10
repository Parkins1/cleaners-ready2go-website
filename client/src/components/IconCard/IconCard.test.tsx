import React from 'react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconCard from './IconCard';

describe('IconCard', () => {
  const mockProps = {
    title: 'Test Title',
    items: ['Item 1', 'Item 2'],
  };

  it('renders title and items', () => {
    render(<IconCard {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders icon when iconName provided', () => {
    render(<IconCard {...mockProps} iconName="Sparkles" />);

    expect(screen.getByTestId('lucide-sparkles')).toBeInTheDocument();
  });

  it('renders custom bullet icon when bulletIcon provided', () => {
    render(<IconCard {...mockProps} bulletIcon="CheckCircle" />);

    expect(screen.getByTestId('lucide-check-circle')).toBeInTheDocument();
  });

  it('renders default bullet when no bulletIcon', () => {
    render(<IconCard {...mockProps} />);

    expect(screen.getByText('•')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<IconCard {...mockProps} className="custom-class" />);

    const card = screen.getByText('Test Title').closest('.rounded-xl');
    expect(card).toHaveClass('custom-class');
  });

  it('renders children', () => {
    render(<IconCard {...mockProps}><div data-testid="child">Child</div></IconCard>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});