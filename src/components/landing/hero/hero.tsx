import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./hero.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const images = [
    "https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    "https://plus.unsplash.com/premium_photo-1677171749367-85d6d2d1f81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1602836806451-9acfd78630bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    "https://images.unsplash.com/photo-1598744530577-f067ab29897d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  return (
    <section
      id="hero"
      class="container mx-auto overflow-hidden flex items-center"
    >
      <div class="max-w-2xl space-y-2 px-4">
        <h1 class="text-5xl font-bold">
          Ultimate Team Building Planner{" "}
          <span class="text-3xl text-teal-700">(and Employee lover)</span>
        </h1>
        <h2 class="text-xl">
          Elevate Your Team Building Efforts and Boost Collaboration and Morale
          with Fun and Engaging Customizable Activities on TeamScape
        </h2>

        <form
          class="flex gap-2 py-4"
          action="https://app.us9.list-manage.com/subscribe/post?u=cb3189309ee0c8892e0c764d1&amp;id=e1016087f8&amp;f_id=00c213e1f0"
          method="post"
          target="_blank"
        >
          <input
            name="EMAIL"
            type="email"
            class="border border-gray-400 rounded p-2"
            placeholder="Your email"
            required
          />
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_cb3189309ee0c8892e0c764d1_e1016087f8"
              tabIndex={-1}
              value=""
            />
          </div>
          <button type="submit" class="bg-teal-700 text-white rounded p-2">
            Get access
          </button>
        </form>
      </div>

      <div class="max-h-screen grid grid-cols-3 gap-4 rounded overflow-hidden">
        {images.map((src) => (
          <img src={src} class="max-h-96 max-w-xs w-full h-full object-cover" />
        ))}
      </div>
    </section>
  );
});
