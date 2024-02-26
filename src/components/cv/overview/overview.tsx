import { component$, type JSXOutput } from "@builder.io/qwik";
import {
  HiEnvelopeSolid,
  HiGlobeAltMini,
  HiPhoneSolid,
} from "@qwikest/icons/heroicons";
import { SiGithub, SiLinkedin } from "@qwikest/icons/simpleicons";
import type { Link, User } from "~/definition";

import styles from "./overview.module.css";

export default component$<{ user: User }>(({ user }) => {
  return (
    <article class={styles.wrapper}>
      <div>
        <h1 class={styles.name}>
          {user.firstName}{" "}
          <b>{[user.middleName, user.lastName].filter(Boolean).join(" ")}</b>
        </h1>
        <p class={styles.job}>{user.job}</p>
        <ul class={styles["contact-list"]}>
          {(
            [
              [SiGithub, user.github],
              [SiLinkedin, user.linkedin],
              [HiEnvelopeSolid, user.email],
              [HiPhoneSolid, user.phone],
              [HiGlobeAltMini, user.website],
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
        <p class={styles.description}>
          {user.quote && `"${user.quote.value}" — ${user.quote.author}`}
        </p>
      </div>
      {user.avatar && (
        <img
          src={user.avatar.url}
          alt="Avatar"
          class={styles.image}
          width="160"
          height="160"
          style={{ objectPosition: user.avatar.position }}
        />
      )}
    </article>
  );
});
