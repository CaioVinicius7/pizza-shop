import { http, HttpResponse } from "msw";

import type { GetManagedRestaurantResponse } from "../getManagedRestaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    id: "custom-restaurant-id",
    name: "Pizza Shop",
    description: "Custom restaurant description.",
    managerId: "custom-user-id",
    createdAt: new Date().toISOString(),
    updatedAt: null
  });
});
