import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Netherite",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
