import { component$ } from "@builder.io/qwik";
import { useEducationWidgets } from "~/routes";
import Section from "../section/section";
import Widget from "../widget/widget";

export default component$(() => {
  const widgets = useEducationWidgets();
  return (
    <Section title="Education">
      {widgets.value.map((widget) => (
        <Widget key={widget.title} widget={widget} />
      ))}
    </Section>
  );
});
