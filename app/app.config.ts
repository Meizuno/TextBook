export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
    card: {
      slots: {
        body: "p-2 sm:p-2",
      },
    },
    container: {
      base: "px-0 sm:px-0 lg:px-0",
    },
    input: {
      slots: {
        root: "w-full",
      },
    },
    textarea: {
      slots: {
        root: "w-full mt-4",
        base: "h-full",
      },
      variants: {
        size: {
          md: {
            base: "text-sm",
          },
        },
      },
    },
    select: {
      slots: {
        trailingIcon:
          "group-data-[state=open]:rotate-180 transition-transform duration-200",
      },
    },
    navigationMenu: {
      slots: {
        root: "rounded-full px-1 py-1 glass",
        link: "flex flex-col gap-1 w-14 before:rounded-full",
        linkLabel: "text-2xs font-bold",
        linkLeadingIcon: "size-6",
      },
      variants: {
        orientation: {
          horizontal: {
            root: "justify-center",
            list: "rounded",
            item: "py-0",
            link: "px-2",
          },
        },
        active: {
          true: {
            childLink: "before:bg-none",
            childLinkIcon: "text-default",
            link: "glass-inner rounded-full text-white",
          },
          false: {
            link: "text-default",
            linkLeadingIcon: "text-default",
          },
        },
      },
      compoundVariants: [
        {
          variant: "pill",
          active: true,
          highlight: false,
          class: {
            link: "before:bg-transparent",
          },
        },
      ],
    },
    tree: {
      slots: {
        linkLeadingIcon: "text-primary",
      },
    },
    breadcrumb: {
      slots: {
        list: "gap-0",
        link: "gap-0.5",
      },
      variants: {
        active: {
          true: {
            link: "text-highlighted font-medium",
          },
          false: {
            link: "text-highlighted font-medium",
          },
        },
      },
    },
    toast: {
      slots: {
        root: "mt-16"
      }
    },
  },
});
