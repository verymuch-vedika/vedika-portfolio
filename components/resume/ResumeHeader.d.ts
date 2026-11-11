/** @startingPoint section="Resume" subtitle="Resume masthead — portrait, name, contacts" viewport="800x140" */
export interface ResumeHeaderProps { name?: string; title?: string; portrait?: string; contacts?: { label: string; href?: string; underline?: boolean }[]; }
export declare function ResumeHeader(props: ResumeHeaderProps): JSX.Element;
