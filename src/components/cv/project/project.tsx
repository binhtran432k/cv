import { component$ } from "@builder.io/qwik";
import { useProjectWidgets } from "~/routes";
import Section from "../section/section";
import Widget from "../widget/widget";

export default component$(() => {
  const widgets = useProjectWidgets();
  return (
    <Section title="Projects">
      {widgets.value.map((widget) => (
        <Widget key={widget.title} widget={widget} />
      ))}
    </Section>
  );
});
