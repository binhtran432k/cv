import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Overview from "~/components/cv/overview/overview";
import type { User } from "~/definition";

export default component$(() => {
  return (
    <>
      <Overview />
    </>
  );
});

export const useUser = routeLoader$(async () => {
  const res = await fetch(
    "https://binhtran432k.github.io/binhtran432k/metadata/overview.json",
  );
  const user = await res.json();
  return user as User;
});

export const head: DocumentHead = {
  title: "CV of Binh",
  meta: [
    {
      name: "description",
      content: "Curriculum Vitae of Binh Duc Tran",
    },
  ],
};
