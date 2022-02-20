const dev = process.env.NODE_ENV !== "production";

//TODO: Change production server
export const server = dev ? "http://localhost:3000" : "http://localhost:3000";
