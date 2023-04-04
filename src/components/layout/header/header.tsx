import { component$ } from '@builder.io/qwik';
import { QwikLogo } from "~/components/icons/qwik-logo";

export default component$(() => {
  return (
    <header class="container mx-auto">
      <div class="py-6">
        <a href="/" title="ekstremac" class="text-2xl font-bold text-cyan-700 flex gap-2">
          <QwikLogo /> Qwik
        </a>
      </div>
    </header>
  );
});
