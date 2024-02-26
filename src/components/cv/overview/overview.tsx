import { component$, type JSXOutput } from "@builder.io/qwik";
import {
  HiEnvelopeSolid,
  HiGlobeAltMini,
  HiPhoneSolid,
} from "@qwikest/icons/heroicons";
import { SiGithub, SiLinkedin } from "@qwikest/icons/simpleicons";
import type { Link } from "~/definition";
import { useUser } from "~/routes";

import styles from "./overview.module.css";

export default component$(() => {
  const user = useUser();

  return (
    <article class={styles.wrapper}>
      <div>
        <h1 class={styles.name}>
          {user.value.firstName}{" "}
          <b>
            {[user.value.middleName, user.value.lastName]
              .filter(Boolean)
              .join(" ")}
          </b>
        </h1>
        <p class={styles.job}>{user.value.job}</p>
        <ul class={styles["contact-list"]}>
          {(
            [
              [SiGithub, user.value.github],
              [SiLinkedin, user.value.linkedin],
              [HiEnvelopeSolid, user.value.email],
              [HiPhoneSolid, user.value.phone],
              [HiGlobeAltMini, user.value.website],
            ].filter(([, x]) => x) as Array<[() => JSXOutput, Link]>
          ).map(([Icon, link]: [() => JSXOutput, Link], i) => (
            <li key={i} class={styles.contact}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {<Icon />}
                {link.value}
              </a>
            </li>
          ))}
          <li class={styles.note}>(All links are clickable)</li>
        </ul>
        <p class={styles.description}>{user.value.description}</p>
      </div>
      {user.value.avatar && (
        <img
          src={user.value.avatar.url}
          alt="Avatar"
          class={styles.image}
          width="160"
          height="160"
          style={{ objectPosition: user.value.avatar.position }}
        />
      )}
    </article>
  );
});
