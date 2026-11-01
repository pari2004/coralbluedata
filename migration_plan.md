# Coral Blue Data: DreamHost to Hostinger Migration Plan

This document outlines the step-by-step procedure for migrating the Coral Blue Data website from DreamHost to Hostinger while ensuring zero data loss, minimal downtime, and preservation of SEO rankings.

## 1. Pre-Migration Checklist
- [ ] **Full Backup:** Generate a full backup of the WordPress files (via FTP) and the MySQL database (via phpMyAdmin) from DreamHost.
- [ ] **Inventory:** List all active plugins, theme version, and custom code snippets.
- [ ] **Email Audit:** Identify all business email accounts hosted on DreamHost and their DNS records (MX, SPF, DKIM).
- [ ] **SEO Baseline:** Document current top-performing URLs and metadata for verification post-migration.

## 2. Staging Environment Setup (on Hostinger)
- [ ] **Create Website:** Add `coralbluedata.com` to the Hostinger hPanel.
- [ ] **Staging URL:** Use a Hostinger preview URL or modify the local `hosts` file to access the site on the new server before DNS propagation.
- [ ] **Database Import:** Create a new MySQL database on Hostinger and import the `.sql` file from DreamHost.
- [ ] **File Transfer:** Upload WordPress files via Hostinger File Manager or FTP.
- [ ] **Config Update:** Update `wp-config.php` with the new Hostinger database credentials.

## 3. Compatibility & Optimization
- [ ] **PHP Version:** Ensure Hostinger is running the same or a newer PHP version (recommended: PHP 8.2+).
- [ ] **SSL Setup:** Install a free Let's Encrypt SSL certificate via hPanel.
- [ ] **Search & Replace:** If the URL changes (e.g., during staging), run a "Search and Replace" on the database to update all instances of the domain.

## 4. DNS & Email Migration
- [ ] **TTL Adjustment:** Lower the TTL (Time to Live) on current DNS records to 300 seconds 24 hours before migration.
- [ ] **Nameserver Update:** Point nameservers to Hostinger (`ns1.dns-parking.com`, `ns2.dns-parking.com`) OR update A/AAAA records if using a third-party DNS like Cloudflare.
- [ ] **Email Migration:** Recreate email accounts on Hostinger and use their "Email Import" tool to sync old messages from DreamHost.

## 5. Post-Migration Verification
- [ ] **Link Check:** Run a crawl (e.g., Screaming Frog) to ensure no 404 errors were introduced.
- [ ] **Form Testing:** Verify that all contact and quote forms successfully deliver emails via SMTP (Hostinger's mail server or a third-party provider like SendGrid).
- [ ] **Speed Test:** Compare PageSpeed Insights scores before and after.
- [ ] **SSL Verification:** Ensure the site loads over HTTPS without mixed content warnings.

## 6. Rollback Procedure
- If critical errors occur that cannot be resolved within 2 hours:
  - Revert DNS nameservers to DreamHost.
  - Keep DreamHost hosting active for at least 30 days post-migration as a safety net.

---
**Status:** Ready for Execution
**Prepared by:** Senior Software Architect
