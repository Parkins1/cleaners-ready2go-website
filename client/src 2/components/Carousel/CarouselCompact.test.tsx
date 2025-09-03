import { render, screen } from "@testing-library/react";
import React from "react";
import CarouselCompact from "@/components/Carousel/CarouselCompact";

describe("CarouselCompact", () => {
  it("renders items and marks the first as active", () => {
    render(
      <CarouselCompact
        items={[
          <div key="a">Slide A</div>,
          <div key="b">Slide B</div>,
          <div key="c">Slide C</div>,
        ]}
      />
    );

    const slides = screen.getAllByRole("group"); // CarouselItem uses role="group"
    expect(slides.length).toBe(3);

    // data-compact-slide attribute is present on each
    slides.forEach((el) => {
      expect(el).toHaveAttribute("data-compact-slide");
    });

    // First slide should be active on initial render
    expect(slides[0].getAttribute("data-active")).toBe("true");
    expect(slides[1].getAttribute("data-active")).toBe("false");
    expect(slides[2].getAttribute("data-active")).toBe("false");
  });
});

