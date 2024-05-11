import { NextResponse } from "next/server";

export const middleware = (request) => {
  // Implement middleware logic here
  // You can access the request object and perform various operations
  // such as authentication, authorization, rate limiting, etc.
  // Example: Implement basic authentication

  console.log({ request });

  return NextResponse.next();
};
