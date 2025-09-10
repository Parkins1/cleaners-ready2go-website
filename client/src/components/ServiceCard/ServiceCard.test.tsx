import React from 'react';
import { describe, it, expect } from '@jest/globals';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';
import { ServiceCardProps } from './types';

describe('ServiceCard', () => {
  const mockProps: ServiceCardProps = {
    id: 'test-id',
    title: 'Test Service',
    blurb: 'Test description',
    href: '/test-service',
    img: '/test-image.jpg',
    imgAlt: 'Test image alt',
    imgWidth: 400,
    imgHeight: 300,
    icon: <div data-testid="test-icon">Icon</div>,
  };

  it('renders service title and description', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('hides icon when hideIcon is true', () => {
    render(<ServiceCard {...mockProps} hideIcon={true} />);
    
    expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
  });

  it('renders learn more link', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ServiceCard {...mockProps} className="custom-class" />);
    
    const card = screen.getByLabelText('Test Service - Learn more');
    expect(card).toHaveClass('custom-class');
  });

  it('uses fallback alt text when imgAlt not provided', () => {
    const propsWithoutAlt = { ...mockProps, imgAlt: undefined };
    render(<ServiceCard {...propsWithoutAlt} />);
    
    const image = screen.getByAltText('Test Service in Spokane area');
    expect(image).toBeInTheDocument();
  });
});
