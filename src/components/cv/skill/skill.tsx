import { component$ } from "@builder.io/qwik";
import Section from "../section/section";
import { useSkillCategories } from "~/routes";

import styles from "./skill.module.css";

export default component$(() => {
  const categories = useSkillCategories();

  return (
    <Section title="Skills">
      <table class={styles.table}>
        <tbody>
          {categories.value.map((category) => (
            <tr key={category.name}>
              <th>{category.name}</th>
              <td>{category.skills.join(" | ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
});
