/** @startingPoint section="Mobile" subtitle="Phone nav with hamburger dropdown" viewport="390x380" */
export interface MobileNavProps { links?: { label: string; href?: string }[]; cta?: string; ctaHref?: string; phone?: boolean; defaultOpen?: boolean; }
export declare function MobileNav(props: MobileNavProps): JSX.Element;
