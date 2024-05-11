import './MyLabel.css';

type Size = 'normal' | 'h1' | 'h2' | 'h3';
type Color = 'text-primary' | 'text-secondary' | 'text-tertiary';

interface Props {
	/**
	 * Text to display
	 */
	label: string;

	/**
	 * Label size
	 */
	size?: Size;

	/**
	 * Capitalize all letters
	 */
	allCaps?: boolean;

	/**
	 * Label color
	 */
	color?: Color;

	/**
	 * Font color
	 */
	fontColor?: string;

  /**
	 * Font color
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	label,
	size = 'normal',
	allCaps = false,
	color = 'text-primary',
	fontColor = '',
  backgroundColor = 'transparent',
}: Props) => {
	return (
		<span
			className={`${size} ${color} label`}
      style={{color: fontColor, backgroundColor}}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
