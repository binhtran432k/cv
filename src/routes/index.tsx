import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Education from "~/components/cv/education/education";
import Experience from "~/components/cv/experience/experience";
import Overview from "~/components/cv/overview/overview";
import Project from "~/components/cv/project/project";
import Skill from "~/components/cv/skill/skill";
import Summary from "~/components/cv/summary/summary";
import type { SkillCategory, User, WidgetType } from "~/definition";

export default component$(() => {
  const user = useUser();

  return (
    <>
      <Overview user={user.value} />
      <Summary content={user.value.summary} />
      <Skill />
      <Experience />
      <Project />
      <Education />
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

export const useExperienceWidgets = routeLoader$(async () => {
  const res = await fetch(
    "https://binhtran432k.github.io/binhtran432k/metadata/experience.json",
  );
  const data = await res.json();
  return data.widgets as WidgetType[];
});

export const useProjectWidgets = routeLoader$(async () => {
  const res = await fetch(
    "https://binhtran432k.github.io/binhtran432k/metadata/project.json",
  );
  const data = await res.json();
  return data.widgets as WidgetType[];
});

export const useEducationWidgets = routeLoader$(async () => {
  const res = await fetch(
    "https://binhtran432k.github.io/binhtran432k/metadata/education.json",
  );
  const data = await res.json();
  return data.widgets as WidgetType[];
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
