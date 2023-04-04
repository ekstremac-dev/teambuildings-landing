import { component$, Slot } from '@builder.io/qwik';

import Footer from "~/components/layout/footer/footer";
import Header from '~/components/layout/header/header';

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Header />
        <Slot />
        <Footer />
      </main>
    </div>
  );
});
