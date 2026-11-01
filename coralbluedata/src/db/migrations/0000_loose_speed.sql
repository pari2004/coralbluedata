CREATE TABLE `admin_users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`password_hash` text NOT NULL,
	`role` text DEFAULT 'editor' NOT NULL,
	`last_login_at` integer,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `admin_users_email_idx` ON `admin_users` (`email`);--> statement-breakpoint
CREATE TABLE `article_tags` (
	`article_id` text NOT NULL,
	`tag_id` text NOT NULL,
	FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `article_tags_pk` ON `article_tags` (`article_id`,`tag_id`);--> statement-breakpoint
CREATE TABLE `articles` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`featured_media_id` text,
	`author_id` text,
	`category_id` text,
	`seo_title` text,
	`seo_description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`published_at` integer,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`author_id`) REFERENCES `admin_users`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `articles_slug_idx` ON `articles` (`slug`);--> statement-breakpoint
CREATE INDEX `articles_status_idx` ON `articles` (`status`,`published_at`);--> statement-breakpoint
CREATE TABLE `audit_events` (
	`id` text PRIMARY KEY NOT NULL,
	`actor_id` text,
	`action` text NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` text,
	`meta` text,
	`ip` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`actor_id`) REFERENCES `admin_users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `audit_events_created_idx` ON `audit_events` (`created_at`);--> statement-breakpoint
CREATE TABLE `case_studies` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`client` text,
	`summary` text DEFAULT '' NOT NULL,
	`challenge` text DEFAULT '' NOT NULL,
	`solution` text DEFAULT '' NOT NULL,
	`outcomes` text DEFAULT '[]' NOT NULL,
	`verified` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `case_studies_slug_idx` ON `case_studies` (`slug`);--> statement-breakpoint
CREATE INDEX `case_studies_status_idx` ON `case_studies` (`status`);--> statement-breakpoint
CREATE TABLE `categories` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_slug_idx` ON `categories` (`slug`);--> statement-breakpoint
CREATE TABLE `coverage_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`region` text NOT NULL,
	`country` text NOT NULL,
	`detail` text DEFAULT '' NOT NULL,
	`lat` integer,
	`lng` integer,
	`verified` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `coverage_status_idx` ON `coverage_entries` (`status`);--> statement-breakpoint
CREATE TABLE `cta_blocks` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text NOT NULL,
	`heading` text NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`label` text NOT NULL,
	`href` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cta_blocks_key_idx` ON `cta_blocks` (`key`);--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`company` text,
	`phone` text,
	`industry` text,
	`volume` text,
	`message` text DEFAULT '' NOT NULL,
	`source` text DEFAULT 'contact' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`spam_score` integer DEFAULT 0 NOT NULL,
	`ip` text,
	`user_agent` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `enquiries_status_idx` ON `enquiries` (`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `enquiries_email_idx` ON `enquiries` (`email`);--> statement-breakpoint
CREATE TABLE `enquiry_notes` (
	`id` text PRIMARY KEY NOT NULL,
	`enquiry_id` text NOT NULL,
	`author_id` text,
	`body` text NOT NULL,
	`status_from` text,
	`status_to` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`enquiry_id`) REFERENCES `enquiries`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`author_id`) REFERENCES `admin_users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `enquiry_notes_enquiry_idx` ON `enquiry_notes` (`enquiry_id`);--> statement-breakpoint
CREATE TABLE `industries` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`icon` text DEFAULT 'building-2' NOT NULL,
	`seo_title` text,
	`seo_description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `industries_slug_idx` ON `industries` (`slug`);--> statement-breakpoint
CREATE INDEX `industries_status_idx` ON `industries` (`status`);--> statement-breakpoint
CREATE TABLE `media` (
	`id` text PRIMARY KEY NOT NULL,
	`filename` text NOT NULL,
	`display_name` text NOT NULL,
	`url` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`width` integer,
	`height` integer,
	`alt` text DEFAULT '' NOT NULL,
	`title` text,
	`uploaded_by` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`uploaded_by`) REFERENCES `admin_users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `media_created_idx` ON `media` (`created_at`);--> statement-breakpoint
CREATE TABLE `nav_items` (
	`id` text PRIMARY KEY NOT NULL,
	`menu` text NOT NULL,
	`label` text NOT NULL,
	`href` text NOT NULL,
	`parent_id` text,
	`order` integer DEFAULT 0 NOT NULL,
	`is_visible` integer DEFAULT true NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `nav_items_menu_idx` ON `nav_items` (`menu`,`order`);--> statement-breakpoint
CREATE TABLE `page_sections` (
	`id` text PRIMARY KEY NOT NULL,
	`page_id` text NOT NULL,
	`type` text NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_visible` integer DEFAULT true NOT NULL,
	`data` text DEFAULT '{}' NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `page_sections_page_idx` ON `page_sections` (`page_id`,`order`);--> statement-breakpoint
CREATE TABLE `pages` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`hero_heading` text,
	`hero_subheading` text,
	`cta_label` text,
	`cta_href` text,
	`seo_title` text,
	`seo_description` text,
	`og_image_id` text,
	`published_at` integer,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pages_slug_idx` ON `pages` (`slug`);--> statement-breakpoint
CREATE INDEX `pages_status_idx` ON `pages` (`status`);--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`icon` text DEFAULT 'database' NOT NULL,
	`hero_heading` text,
	`hero_subheading` text,
	`body` text DEFAULT '' NOT NULL,
	`benefits` text DEFAULT '[]' NOT NULL,
	`use_cases` text DEFAULT '[]' NOT NULL,
	`workflow` text DEFAULT '[]' NOT NULL,
	`related_service_ids` text DEFAULT '[]' NOT NULL,
	`seo_title` text,
	`seo_description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `services_slug_idx` ON `services` (`slug`);--> statement-breakpoint
CREATE INDEX `services_status_idx` ON `services` (`status`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `admin_users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `sessions_user_idx` ON `sessions` (`user_id`);--> statement-breakpoint
CREATE TABLE `site_settings` (
	`id` text PRIMARY KEY DEFAULT 'singleton' NOT NULL,
	`company_name` text DEFAULT 'Coral Blue Data' NOT NULL,
	`logo_media_id` text,
	`favicon_media_id` text,
	`contact_email` text,
	`contact_phone` text,
	`contact_address` text,
	`footer_tagline` text DEFAULT '' NOT NULL,
	`social_links` text DEFAULT '[]' NOT NULL,
	`default_seo_title` text,
	`default_seo_description` text,
	`default_share_image_id` text,
	`primary_cta_label` text DEFAULT 'Request a Quote' NOT NULL,
	`primary_cta_href` text DEFAULT '/request-a-quote' NOT NULL,
	`secondary_cta_label` text DEFAULT 'Explore Solutions' NOT NULL,
	`secondary_cta_href` text DEFAULT '/solutions' NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tags_slug_idx` ON `tags` (`slug`);--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` text PRIMARY KEY NOT NULL,
	`author` text NOT NULL,
	`role` text,
	`company` text,
	`quote` text NOT NULL,
	`verified` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`order` integer DEFAULT 0 NOT NULL,
	`is_seed` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `testimonials_status_idx` ON `testimonials` (`status`);