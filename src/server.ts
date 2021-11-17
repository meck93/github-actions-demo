import { serve } from "../dependencies.ts";

const addr = ":8000";

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  console.log("server.ts 7 url.searchParams:", url.searchParams.get("a"), url.searchParams.get("b"));

  const userAgent = request.headers.get("user-agent") || "Unknown";
  const responseBody = `Your User-Agent is: ${userAgent}`;
  return new Response(responseBody, { status: 200 });
};

console.log(`HTTP webserver running at: localhost:8000`);
await serve(handler, { addr });
