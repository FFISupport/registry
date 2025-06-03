import type { z } from "zod";
import type { filesSelectSchema } from "@/db/schema/files";

export interface PageParams {
    params: Promise<{
        slug: string;
    }>;
}

export type ClientFile = z.infer<typeof filesSelectSchema>;
