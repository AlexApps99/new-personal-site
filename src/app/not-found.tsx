export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-5xl font-bold">404!</h2>
      <span className="text-lg">
        Another page lost to the sands of time... Consider donating to the{" "}
        <a
          className="text-green-500"
          href="https://archive.org/donate"
          target="_blank"
        >
          Internet Archive
        </a>
        .
      </span>
    </div>
  );
}
