import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:border print:border-border print:bg-secondary/60 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="whitespace-nowrap text-sm tabular-nums text-gray-500 print:text-xs"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyNameProps {
  company: WorkExperience["company"];
}

/**
 * Renders company name
 */
function CompanyName({ company }: CompanyNameProps) {
  return <span className="font-semibold">{company}</span>;
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:mb-1 print:py-0">
      <CardHeader className="print:space-y-0.5 print:p-2">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 whitespace-nowrap font-semibold leading-none print:text-sm">
            <CompanyName company={company} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[11px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent className="print:p-2 print:pt-0">
        <div className="mt-2 text-pretty text-[12px] text-foreground/80 print:mt-0.5 print:text-[10px] print:leading-tight">
          {description}
        </div>
        <div className="mt-2 print:mt-1">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold print:text-lg" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-4 print:space-y-1"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
