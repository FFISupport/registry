import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const files = sqliteTable(
    "files",
    {
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
        blobUrl: text("blob_url"),
        createdAt: integer("created_at", { mode: "timestamp" })
            .notNull()
            .default(sql`(unixepoch('now'))`),
    },
    (table) => {
        return [index("idx_files_id").on(table.id)];
    },
);

export const filesSelectSchema = createSelectSchema(files);
export const filesSelectSchemaArray = z.array(filesSelectSchema);
export const filesInsertSchema = createInsertSchema(files);

export type FilesInsertType = z.infer<typeof filesInsertSchema>;
