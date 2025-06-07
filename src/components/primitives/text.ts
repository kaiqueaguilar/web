import { styled } from "@/styles/jsx";
import { type TextVariantProps, text } from "@/styles/recipes";
import type { ComponentProps, StyledComponent } from "@/styles/types";

type ParagraphProps = TextVariantProps & { as?: React.ElementType };
export type TextProps = ComponentProps<typeof Text>;
export const Text = styled("p", text) as StyledComponent<"p", ParagraphProps>;
