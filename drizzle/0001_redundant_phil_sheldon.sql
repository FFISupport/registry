DROP INDEX "idx_files_id";--> statement-breakpoint
ALTER TABLE `files` ALTER COLUMN "blob_url" TO "blob_url" text NOT NULL;--> statement-breakpoint
CREATE INDEX `idx_files_id` ON `files` (`id`);