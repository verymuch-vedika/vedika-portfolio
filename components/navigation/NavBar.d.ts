/** @startingPoint section="Navigation" subtitle="Top bar: wordmark, links, Get in touch" viewport="1200x100" */
export interface NavBarProps { links?: { label: string; href?: string; id?: string }[]; cta?: string; ctaHref?: string; sticky?: boolean; onNavigate?: (id: string, e: any) => void; }
export declare function NavBar(props: NavBarProps): JSX.Element;
