export interface SectionNavProps { items: { label: string; num?: string; sub?: string; href?: string }[]; active?: number; onSelect?: (i: number) => void; variant?: 'index' | 'toc'; }
export declare function SectionNav(props: SectionNavProps): JSX.Element;
