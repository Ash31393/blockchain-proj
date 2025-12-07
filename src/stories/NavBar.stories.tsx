import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '../components/client/NavBar';

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavBar />,
};

export const Standalone: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Navigation Bar</p>
      </div>
    </div>
  ),
};
