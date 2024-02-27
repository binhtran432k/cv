import { component$ } from "@builder.io/qwik";
import type { WidgetType } from "~/definition";

import styles from "./widget.module.css";

const Image = component$<{ title: string; imageUrl?: string }>(
  ({ title, imageUrl }) => {
    return (
      imageUrl && (
        <img
          width={44}
          height={44}
          class={styles.image}
          src={imageUrl}
          alt={title}
        />
      )
    );
  },
);

const Title = component$<{ title: string; url?: string }>(({ title, url }) => {
  return (
    <h3 class={styles["title"]}>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
    </h3>
  );
});

const Header = component$<{ widget: WidgetType }>(({ widget }) => {
  return (
    <div class={styles.header}>
      <Image title={widget.title} imageUrl={widget.imageUrl} />
      <div class={styles["header-content"]}>
        <div class={styles["header-left"]}>
          <Title title={widget.title} url={widget.url} />
          <h4 class={styles.subtitle}>{widget.subtitle}</h4>
        </div>
        <div class={styles["header-right"]}>
          <div class={styles.location}>{widget.location}</div>
          <div class={styles.timeline}>{widget.timeline}</div>
        </div>
      </div>
    </div>
  );
});

const ItemList = component$<{ items?: string[] }>(({ items }) => {
  return (
    items && (
      <ul class={styles["item-list"]}>
        {items.map((item, i) => (
          <li key={i} class={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    )
  );
});

export default component$<{ widget: WidgetType }>(({ widget }) => {
  return (
    <article class={styles.wrapper}>
      <Header widget={widget} />
      <ItemList items={widget.items} />
    </article>
  );
});
