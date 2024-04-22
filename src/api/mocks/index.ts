import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { registerRestaurantMock } from "./registerRestaurantMock";
import { signInMock } from "./signInMock";

export const worker = setupWorker(signInMock, registerRestaurantMock);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
