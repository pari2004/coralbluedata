# Coral Blue Data — Administrator Guide

A plain-English guide to running the website through the CMS. **You never need to touch code to make ordinary content changes.**

---

## 1. Signing in

1. Go to **`https://your-site/admin`** (you'll be redirected to the sign-in page).
2. Enter the email and password you were set up with.
3. You'll land on the **Dashboard**.

Sessions expire automatically after a period of inactivity for security. If you're signed out, just sign in again. Use **Sign out** (bottom of the sidebar) on shared computers.

> Lost your password? There's no public "reset" by design. Ask your developer to run the secure `create-admin` setup again for your email — it resets the password without creating a second account.

---

## 2. The dashboard

Shows live numbers from the database: new leads, published pages, published articles and services, recent leads, and recent activity. Click any stat to jump to that section.

---

## 3. Golden rules (how the site stays honest)

- **Draft vs Published.** Only **Published** content shows on the public website. Drafts are private — edit freely without affecting the live site.
- **Verified content.** Testimonials, case studies and coverage regions must be ticked **Verified** before they can be Published. This prevents unapproved claims going live.
- **Contact details.** The footer/contact page only show an email, phone or address **if you enter them** in Settings. Blank = nothing shown (no fake placeholders).
- **"Seed" label.** Items marked *(seed)* are example starter content. Edit or delete them as real content is ready.

---

## 4. Managing leads (enquiries)

**Leads** in the sidebar lists every enquiry submitted through the site.

- Filter by status (New / Contacted / Qualified / Closed) or search by name, email, or company.
- Click a lead to see full details, the message, and add **internal notes**.
- Change the **status** — every change is recorded in the lead's history.
- **Export CSV** (top right) downloads all leads for your records.

Every website enquiry is saved here automatically, even if email notifications aren't set up.

---

## 5. Editing content

Each content type works the same way: a **list** → click an item to **edit**, or **+ New** to create. Click **Save** to store changes to the database immediately. Published items update the live site right away.

| Section | Controls |
| --- | --- |
| **Pages** | Block-based pages at `/pages/<slug>`. Use the slug **`home`** to set the homepage hero heading/subheading. Add content blocks (text, feature grid, steps, FAQ, call-to-action, etc.), reorder them, show/hide, and edit each block's fields. |
| **Services** | Your solutions (shown under `/solutions`). Title, summary, body, benefits, use cases, workflow steps, SEO, status. |
| **Industries** | Sector pages under `/industries`. |
| **Articles** | Blog/insights under `/resources`. Title, summary, body, SEO, status. Publishing sets the date automatically. |
| **Case studies** | Require **Verified** before publishing. |
| **Testimonials** | Require **Verified** before publishing. |
| **Coverage** | Regions shown on the Coverage page. Require **Verified** before publishing. |

### Writing text
- For longer text, **separate paragraphs with a blank line**.
- **Benefits / use cases / outcomes:** type **one item per line**.
- **Workflow steps:** one per line as `Title | Description`.
- **FAQ:** one per line as `Question | Answer`.

### Slugs
The slug is the web address piece (e.g. `data-cleansing` → `/solutions/data-cleansing`). Use lowercase letters, numbers and hyphens only.

---

## 6. Media library

- **Upload** images (PNG, JPG, WEBP, GIF, SVG — up to 8 MB). The server checks the file type and size.
- Add **alt text** (a short description) for accessibility and SEO.
- Each image has a **URL** you can copy and paste into a page's Media block.
- **Delete** removes the file and its record (with a confirmation step).

---

## 7. Settings

- **Company name**, footer tagline.
- **Contact details** — email, phone, address. Leave blank to hide them.
- **Social links** — only rows with a URL appear in the footer.
- **Calls to action** — the labels and links for the two main buttons (e.g. "Request a Quote").
- **Default SEO** — title and description used where a page doesn't specify its own.

---

## 8. Deleting things safely

Delete buttons always ask for **confirmation** first. Deleting a page also removes its content blocks. Deletions can't be undone from the CMS, so when in doubt, set an item to **Draft** or **Archived** instead.

---

## 9. What still needs a developer

- Changing the site's **colours, fonts, or layout**.
- Adding brand-new **section/block types** or page templates.
- **Email notifications** setup (SMTP credentials), hosting, domain/DNS, and backups.
- Creating or resetting **admin accounts**.

For anything else about day-to-day content — you're in control from `/admin`.
