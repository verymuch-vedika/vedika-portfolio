/** @startingPoint section="Cards" subtitle="Case study card — cover, index, facts, link" viewport="1000x420" */
export interface CaseCardProps { num?: string; total?: string; name: string; sector?: string; desc?: string; img?: string; alt?: string; facts?: { k: string; v: string }[]; href?: string; soon?: boolean; onClick?: (e: any) => void; }
export declare function CaseCard(props: CaseCardProps): JSX.Element;
