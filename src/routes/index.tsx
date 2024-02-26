import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Overview from "~/components/cv/overview/overview";
import Skill from "~/components/cv/skill/skill";
import Summary from "~/components/cv/summary/summary";
import type { SkillCategory, User } from "~/definition";

export default component$(() => {
  const user = useUser();

  return (
    <>
      <Overview user={user.value} />
      {user.value.summary && <Summary content={user.value.summary} />}
      <Skill />
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

export const useSkillCategories = routeLoader$(async () => {
  const res = await fetch(
    "https://binhtran432k.github.io/binhtran432k/metadata/skill.json",
  );
  const data = await res.json();
  return data.categories as SkillCategory[];
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
