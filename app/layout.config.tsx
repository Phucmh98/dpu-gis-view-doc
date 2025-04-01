import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/asset/img/favicon.ico"  // Đường dẫn tới logo của bạn
          alt="DPU-logo"
          width={24}               // Điều chỉnh kích thước của logo
          height={24}
        />
        Document
      </>
    ),
  },
  // links: [
  //   {
  //     label: "test",
  //     text: "Documentation",
  //     url: "/docs",
  //     active: "nested-url",
  //   },
  // ],
};
