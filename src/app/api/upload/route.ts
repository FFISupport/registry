import { createRouteHandler } from "uploadthing/next";
import { appFileRouter } from "@/utils/server/upload";

export const { GET, POST } = createRouteHandler({
    router: appFileRouter,
});
