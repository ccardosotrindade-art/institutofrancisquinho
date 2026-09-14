import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cuidados-e-tratamento")({
  beforeLoad: () => {
    throw redirect({ to: "/recebi-o-diagnostico", statusCode: 301 });
  },
});