import { component$ } from "@builder.io/qwik";
import { useExperienceWidgets } from "~/routes";
import Section from "../section/section";
import Widget from "../widget/widget";

export default component$(() => {
  const widgets = useExperienceWidgets();
  return (
    <Section title="Experience">
      {widgets.value.map((widget) => (
        <Widget key={widget.title} widget={widget} />
      ))}
    </Section>
  );
});
