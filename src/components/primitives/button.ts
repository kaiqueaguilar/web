import { styled } from "@/styles/jsx";
import { button } from "@/styles/recipes";
import type { ComponentProps } from "@/styles/types";
import { ark } from "@ark-ui/react/factory";

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = styled(ark.button, button);
