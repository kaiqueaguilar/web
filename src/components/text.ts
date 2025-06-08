import { cva } from "@/styles/css";
import { styled } from "@/styles/jsx";
import type { ComponentProps } from "@/styles/types";
import { ark } from "@ark-ui/react/factory";

const styles = cva({
  variants: {
    variant: {
      heading: {
        fontWeight: "semibold",
        textStyle: "lg",
      },
      body: {
        fontWeight: "normal",
        textStyle: "md",
      },
      caption: {
        fontWeight: "normal",
        textStyle: "sm",
        opacity: 0.75,
      },
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TextProps = ComponentProps<typeof Text>;
export const Text = styled(ark.span, styles);
