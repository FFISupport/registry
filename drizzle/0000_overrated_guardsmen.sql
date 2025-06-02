CREATE TABLE `files` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`blob_key` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch('now')) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_files_id` ON `files` (`id`);