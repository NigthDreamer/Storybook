import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
	title: 'UI/labels/MyLabel',
	component: MyLabel,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: { control: 'inline-radio' },
    fontColor: { control: 'color' },
	},
} satisfies Meta<typeof MyLabel>;
//* satisfies infiere los metadatos del componente indicado

export default meta;
//* Creo una historia con los metadatos especificados
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		label: 'Basic Label',
    size: 'normal',
    allCaps: false,
    color: 'text-secondary',
    fontColor: '#000000',
	},
};

export const AllCaps: Story = {
	args: {
		label: 'All Caps Label',
		allCaps: true,
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary Label',
    color: 'text-secondary',
	},
};

export const CustomColor: Story = {
	args: {
		label: 'Custom Color Label',
    fontColor: '#5517ac',
	},
};

export const CustomBackgroundColor: Story = {
	args: {
		label: 'Custom Color Label',
    fontColor: '#eeeeee',
    backgroundColor: '#000000',
	},
};
