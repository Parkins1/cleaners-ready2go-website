# Rollback Mechanism & Feature Flag Plan

This document describes how to quickly disable the new ContactForm feature and rollback database schema changes if needed.

## 1. Feature Flag

Add an environment variable to toggle between the old and new ContactForm implementation:

1. In your Vite environment file (`.env` or `.env.production`):
   ```dotenv
   VITE_USE_NEW_CONTACT_FORM=true
   ```

2. In `client/src/pages/Contact.tsx`, wrap the import and rendering:
   ```tsx
   // before
   import SnippetContactForm from "./components/ContactForm/SnippetContactForm";

   // after (pseudocode)
   const useNewForm = import.meta.env.VITE_USE_NEW_CONTACT_FORM === "true";
   const ContactFormComponent = useNewForm
     ? SnippetContactForm
     : OldContactForm;

   export function ContactPage() {
     return <ContactFormComponent />;
   }
   ```

3. To rollback to the old form:
   - Set `VITE_USE_NEW_CONTACT_FORM=false`
   - Redeploy the client build.

## 2. Quick Revert Plan

If a critical issue is detected in production:

1. **Revert Feature Flag:**
   - Flip `VITE_USE_NEW_CONTACT_FORM` to `false` in your deployment dashboard or environment.
   - Trigger a quick rebuild & redeploy.

2. **Code Revert (if needed):**
   - Checkout the previous Git tag or merge-base before this feature (`git checkout <commit>`).
   - Rebuild and redeploy.

3. **Database Rollback (Schema Changes):**
   - This release did not introduce any schema migrations. If schema changes are applied in the future:
     - Use Drizzle Kit rollback:
       ```bash
       npx drizzle-kit rollback --to <previous_migration_name>
       ```
     - Verify table structure using psql or your database GUI.
     - Run `npm run build && npm run start` to redeploy backend.

4. **Verification:**
   - Smoke-test the Contact page to confirm the old form is live.
   - Check that submitted data flows correctly to the backend.
   - Monitor logs for errors.

## 3. Validation & Monitoring

- **Logs:** Monitor API logs for 400/500 spikes.
- **Frontend Errors:** Watch Sentry/monitoring dashboard for new exceptions.
- **Traffic:** Roll out feature flag gradually if desired (e.g., 10% traffic split).