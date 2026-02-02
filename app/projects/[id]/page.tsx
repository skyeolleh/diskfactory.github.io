import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    return <ProjectClient project={project} />;
}
