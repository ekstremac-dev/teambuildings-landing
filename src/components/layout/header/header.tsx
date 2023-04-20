import { component$ } from '@builder.io/qwik';

interface LinkItem {
  href: string;
  title: string;
  button?: boolean;
}

export default component$(() => {
  const links: LinkItem[] = [];

  return (
    <header class="container mx-auto flex justify-between sticky top-0 bg-white">
      <div class="py-6">
        <a href="/" title="TeamScape" class="text-2xl font-bold text-teal-700 flex gap-2">
          TeamScape
        </a>
      </div>

      <nav>
        <ul class="flex gap-4 py-6">
          {links.map((link) => (
            <li>
              <a
                href={link.href}
                title={link.title}
                class={`text-lg font-medium ${
                  link.button
                    ? "text-white bg-teal-700 hover:bg-teal-600 rounded-md px-4 py-2"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
