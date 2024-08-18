import Header, { PAGE_LINKS } from "../Header";

export default function Blog() {
  return <div className="flex flex-col lg:flex-row min-h-screen">
    <Header pageLinks={PAGE_LINKS} />
    <main className="p-4 space-y-8 flex-grow max-w-4xl py-8 lg:py-24 mx-auto text-lg">
      <span>TODO</span>
    </main>
  </div>;
}
