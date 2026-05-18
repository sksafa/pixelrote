import MotionWrapper from "./MotionWrapper";

interface SectionHeaderProps {
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({ title, description, center = true }: SectionHeaderProps) {
  return (
    <MotionWrapper className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base leading-7 text-slate-500 md:text-lg">{description}</p>}
    </MotionWrapper>
  );
}
