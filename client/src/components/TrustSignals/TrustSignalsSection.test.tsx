import React from "react";
import { render, screen } from "@testing-library/react";
import TrustSignalsSection from "./TrustSignalsSection";

describe("TrustSignalsSection", () => {
  it("renders title and items with proper semantics", () => {
    render(
      <TrustSignalsSection
        title="Why Homeowners Trust Us"
        items={[
          { highlight: "Licensed", text: "Fully insured and bonded." },
          { highlight: "Eco-friendly", text: "Kid-safe, pet-safe products." },
        ]}
      />
    );

    const heading = screen.getByRole("heading", { name: /Why Homeowners Trust Us/i, level: 2 });
    expect(heading).toBeInTheDocument();

    // Ensure list semantics
    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);

    // Check rendered text fragments
    expect(screen.getByText(/Licensed/i)).toBeInTheDocument();
    expect(screen.getByText(/Fully insured and bonded/i)).toBeInTheDocument();
    expect(screen.getByText(/Eco-friendly/i)).toBeInTheDocument();
  });
});

