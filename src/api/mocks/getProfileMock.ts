import { http, HttpResponse } from "msw";

import type { GetProfileResponse } from "../getProfile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "(35) 9 9999-9999",
      role: "manager",
      createdAt: new Date().toISOString(),
      updatedAt: null
    });
  }
);
