import { component$ } from "@builder.io/qwik";
import Section from "../section/section";

export default component$<{ content: string }>(({ content }) => {
  return <Section title="Summary">{content}</Section>;
});
