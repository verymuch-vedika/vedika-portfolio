/** @startingPoint section="Core" subtitle="Underlined text link with arrow — the primary CTA" viewport="700x200" */
export interface TextLinkProps { children: React.ReactNode; href?: string; icon?: import('./Icon').IconName | null; size?: 's' | 'm' | 'l'; underline?: boolean; iconLeft?: boolean; onClick?: (e: any) => void; }
export declare function TextLink(props: TextLinkProps): JSX.Element;
