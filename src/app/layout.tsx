/** @format */
'use client'

import { Inter } from "next/font/google";
import "./globals/css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient: QueryClient = new QueryClient();
  return (
    <html lang = "en-US">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}