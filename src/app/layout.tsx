import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { custom_theme } from "@/utils/custom-theme";

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
        <MantineProvider theme={custom_theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
