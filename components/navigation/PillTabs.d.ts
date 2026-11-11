export interface PillTabsProps { items: { label: string; num?: string }[]; active?: number; onSelect?: (i: number) => void; }
export declare function PillTabs(props: PillTabsProps): JSX.Element;
