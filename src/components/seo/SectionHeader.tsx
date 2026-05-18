import MotionWrapper from "./MotionWrapper";


interface SectionHeaderProps {
    title: string;
    description: string;
    light?: boolean;
}

export default function SectionHeader({ title, description, light = false }: SectionHeaderProps) {
    return (
        <MotionWrapper className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className={`mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
                {title}
            </h2>
            <p className={`text-lg ${light ? "text-white/70" : "text-slate-500"}`}>{description}</p>
        </MotionWrapper>
    );
}