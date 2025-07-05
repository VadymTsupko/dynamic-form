import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import mockData from "./mockData.json";

const worker = setupWorker(
  http.get("/api/formConfig", () => {
    return HttpResponse.json(mockData);
  })
);

export { worker };
