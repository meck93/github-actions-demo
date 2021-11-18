import { connect, serve, parseURL } from "../dependencies.ts";
import { add } from "./addition.ts";

const redisOptions = parseURL("redis://:Test1234@127.0.0.1:6379");
const redis = await connect(redisOptions);

const handler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const a = url.searchParams.get("a");
  const b = url.searchParams.get("b");

  if (a !== null && b !== null) {
    const result = add(Number(a), Number(b));

    await redis.set("addition", result);

    const response = `The result is: ${result}`;
    return new Response(response, { status: 200 });
  } else {
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const responseBody = `Your User-Agent is: ${userAgent}`;
    return new Response(responseBody, { status: 200 });
  }
};

console.log(`HTTP webserver running at: localhost:8000`);
await serve(handler);
