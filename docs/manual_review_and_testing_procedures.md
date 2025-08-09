# Manual Review & Testing Procedures

This document outlines manual test cases and procedures for the new ContactForm component and `/api/contacts` endpoint.

## 1. Cross-Browser Compatibility

Test the form and confirmation flows in the latest stable versions of:
- Chrome (Desktop & Mobile emulation)
- Firefox (Desktop & Mobile emulation)
- Safari (macOS & iOS)
- Edge (Chromium-based)
- Internet Explorer 11 (if required by scope)

Checklist:
- [ ] Form layout renders correctly (labels, inputs, buttons)
- [ ] Responsive behavior at common breakpoints (320px, 480px, 768px, 1024px, 1440px)
- [ ] Hover and focus states for inputs and button are visible
- [ ] Error messages appear and align correctly
- [ ] Success confirmation message displays after submission

## 2. Mobile Responsiveness

Test on real devices or accurate simulators:
- iOS Safari (iPhone SE, iPhone 12/13, iPad)
- Android Chrome (small, medium, large devices)

Checklist:
- [ ] Inputs and button scale and wrap appropriately
- [ ] Touch targets meet minimum size (44×44 px)
- [ ] Keyboard does not obscure input fields
- [ ] Form scrolls within viewport without overflow

## 3. Accessibility

Use keyboard-only navigation and screen readers:
- Keyboard tab order follows logical sequence: First Name → Last Name → Email → Phone → Service Type → Message → Submit
- ARIA roles and labels:
  - [ ] All inputs have associated `<label>` elements or aria-labels
  - [ ] Error messages are announced via `aria-live`
- Contrast ratios:
  - [ ] Text vs. background meets WCAG AA minimum (4.5:1)
- Form validation:
  - [ ] Required fields announce errors when left blank
  - [ ] Invalid email format announces error

## 4. Form Validation & Error States

Test validation scenarios:
- [ ] All required fields empty → consolidated error messages
- [ ] Invalid email address format → specific email error
- [ ] Phone number too short or non-numeric → specific phone error
- [ ] Message field too long or empty → validation message
- [ ] Service Type dropdown selection required → validation error

## 5. API Error Handling

Simulate backend error responses:
- 400 Validation error → form displays field-level errors
- 500 Internal server error → form shows generic error banner
- Network failure → form shows offline/error notification

## 6. UX Confirmation

- [ ] After successful submission, clear form fields
- [ ] Display success state or toast notification
- [ ] Prevent duplicate submissions while loading
- [ ] “Go back” or “Submit another request” link available

## 7. Documentation & Sign-Off

- [ ] Attach screenshots for each device and browser
- [ ] Record any anomalies and browser/OS versions
- [ ] Obtain stakeholder sign-off after all cases pass