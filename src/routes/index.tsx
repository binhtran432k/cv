import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Certificate from "~/components/cv/certificate/certificate";
import Education from "~/components/cv/education/education";
import Experience from "~/components/cv/experience/experience";
import Overview from "~/components/cv/overview/overview";
import Project from "~/components/cv/project/project";
import Skill from "~/components/cv/skill/skill";
import Summary from "~/components/cv/summary/summary";
import type { InlineType, SkillCategory, User, WidgetType } from "~/definition";
import { getUrl } from "~/utils/url";

export default component$(() => {
  const user = useUser();

  return (
    <>
      <Overview user={user.value} />
      <Summary content={user.value.summary} />
      <Skill />
      <Experience />
      <Project />
      <Certificate />
      <Education />
    </>
  );
});

export const useUser = routeLoader$(async () => {
  const res = await fetch(getUrl("/binhtran432k/metadata/overview.json"));
  const user = (await res.json()) as User;
  if (user.avatar?.url) {
    user.avatar.url = getUrl(user.avatar.url);
  }
  return user;
});

export const useSkillCategories = routeLoader$(async () => {
  const res = await fetch(getUrl("/binhtran432k/metadata/skill.json"));
  const data = await res.json();
  return data.categories as SkillCategory[];
});

export const useExperienceWidgets = routeLoader$(async () => {
  const res = await fetch(getUrl("/binhtran432k/metadata/experience.json"));
  const data = await res.json();
  return (data.widgets as WidgetType[]).map((w) => ({
    ...w,
    imageUrl: w.imageUrl && getUrl(w.imageUrl),
  }));
});

export const useProjectWidgets = routeLoader$(async () => {
  const res = await fetch(getUrl("/binhtran432k/metadata/project.json"));
  const data = await res.json();
  return (data.widgets as WidgetType[]).map((w) => ({
    ...w,
    imageUrl: w.imageUrl && getUrl(w.imageUrl),
  }));
});

export const useEducationWidgets = routeLoader$(async () => {
  const res = await fetch(getUrl("/binhtran432k/metadata/education.json"));
  const data = await res.json();
  return (data.widgets as WidgetType[]).map((w) => ({
    ...w,
    imageUrl: w.imageUrl && getUrl(w.imageUrl),
  }));
});

export const useCertificateInlines = routeLoader$(async () => {
  const res = await fetch(getUrl("/certificates/metadata.json"));
  const data = await res.json();
  return (data.inlines as InlineType[]).map((i) => ({
    ...i,
    url: i.url && getUrl(i.url),
  }));
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
