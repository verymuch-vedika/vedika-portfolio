/** @startingPoint section="Navigation" subtitle="Dark footer with pill links and big email" viewport="1200x260" */
export interface FooterProps { email?: string; links?: { label: string; href?: string }[]; social?: { label: string; href?: string }[]; year?: number; }
export declare function Footer(props: FooterProps): JSX.Element;
