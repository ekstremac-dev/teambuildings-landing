import { component$ } from '@builder.io/qwik';
import { HeartIcon } from "~/components/icons/heart";

export default component$(() => {
  return (
    <footer class="container px-4 mx-auto mt-4 flex gap-1">
      Created with
      <HeartIcon />
      by Ekstremac.
    </footer>
  );
});
