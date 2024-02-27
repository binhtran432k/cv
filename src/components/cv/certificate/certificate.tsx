import { component$ } from "@builder.io/qwik";
import { useCertificateInlines } from "~/routes";
import Section from "../section/section";
import Inline from "../inline/inline";

import styles from "./certificate.module.css";

export default component$(() => {
  const inlines = useCertificateInlines();
  return (
    <Section title="Certificates">
      <p class={styles.note}>(All certificates are clickable)</p>
      {inlines.value.map((inline) => (
        <Inline key={inline.title} inline={inline} />
      ))}
    </Section>
  );
});
