import React from "react";
import { describe, it, expect, jest } from "@jest/globals";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { ContactFormData } from "./schema";

describe("ContactForm", () => {
  const mockOnSubmit = jest.fn<Promise<void>, [ContactFormData]>();

  beforeEach(() => {
    mockOnSubmit.mockReset();
  });

  it("renders all fields and submit button", () => {
    render(<ContactForm onSubmit={mockOnSubmit} isLoading={false} />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    render(<ContactForm onSubmit={mockOnSubmit} isLoading={false} />);
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
    expect(await screen.findByText(/First name is required/i)).toBeVisible();
    expect(await screen.findByText(/Last name is required/i)).toBeVisible();
    expect(await screen.findByText(/Invalid email address/i)).toBeVisible();
    expect(await screen.findByText(/Phone number is required/i)).toBeVisible();
    expect(await screen.findByText(/Service type is required/i)).toBeVisible();
    expect(await screen.findByText(/Message must be at least 10 characters/i)).toBeVisible();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("submits valid data", async () => {
    mockOnSubmit.mockResolvedValueOnce();
    render(<ContactForm onSubmit={mockOnSubmit} isLoading={false} />);

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "(123) 456-7890" } });
    fireEvent.change(screen.getByLabelText(/Service Type/i), { target: { value: "residential" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Looking for a weekly clean." } });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "(123) 456-7890",
        serviceType: "residential",
        message: "Looking for a weekly clean."
      });
    });
  });

  it("disables submit button when loading", () => {
    render(<ContactForm onSubmit={mockOnSubmit} isLoading={true} />);
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeDisabled();
  });
});
