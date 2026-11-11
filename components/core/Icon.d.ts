export type IconName = 'arrow-up-right' | 'arrow-down' | 'chevron-left' | 'chevron-right' | 'arrow-right' | 'spark' | 'ask' | 'expand' | 'quote';
export interface IconProps { name?: IconName; size?: number; style?: React.CSSProperties; }
export declare function Icon(props: IconProps): JSX.Element;
