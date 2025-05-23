import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold print:text-lg" id="about-section">
        About
      </h2>
      <div
        className="text-pretty font-sans text-sm font-medium text-muted-foreground print:text-[10px] print:leading-tight"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
