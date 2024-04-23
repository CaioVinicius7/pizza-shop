import { http, HttpResponse } from "msw";

import type { UpdateProfileParams } from "../updateProfile";

export const updateProfileMock = http.put<never, UpdateProfileParams>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Rocket Pizza") {
      return new HttpResponse(null, {
        status: 204
      });
    }

    return new HttpResponse(null, {
      status: 400
    });
  }
);