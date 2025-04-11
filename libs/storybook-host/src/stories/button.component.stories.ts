import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@sambia-alfabit/button";

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args:{
        text: 'Action',
    }
}
export const SecundaryButton: Story = {}