import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { uuidv7 } from "uuidv7";

export const filesTable = sqliteTable(
    "files",
    {
        id: text("id")
            .primaryKey()
            .notNull()
            .$defaultFn(() => uuidv7()),
        name: text("name").notNull(),
        blobKey: text("blob_key").notNull(),
        createdAt: integer("created_at", { mode: "timestamp" })
            .notNull()
            .default(sql`(unixepoch('now'))`),
    },
    (table) => {
        return [index("idx_files_id").on(table.id)];
    },
);

export const filesSelectSchema = createSelectSchema(filesTable);
export const filesSelectSchemaArray = z.array(filesSelectSchema);
export const filesInsertSchema = createInsertSchema(filesTable);

export type FilesInsertType = z.infer<typeof filesInsertSchema>;
