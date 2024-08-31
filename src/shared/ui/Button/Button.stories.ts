import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from './Button';
import { ThemeButton } from "./Button.props";

const meta = {
	title: "Example/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'Test',
        theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Test',
        theme: ThemeButton.OUTLINE,
	},
};
