export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const stored = localStorage.getItem('theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = stored || (systemDark ? 'dark' : 'light');
              document.body.classList.toggle('light', theme === 'light');
              document.body.classList.toggle('dark', theme === 'dark');
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
