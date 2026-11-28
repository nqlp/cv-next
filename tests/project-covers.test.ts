import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ProjectCard from "@/components/ui/ProjectCard";

function renderCard(id: string, position: number) {
  return renderToStaticMarkup(createElement(ProjectCard, {
    id,
    position,
    title: "Project",
    description: "Description",
    date: "2025",
    tags: [],
    context: "Personal",
    linkLabel: "View on GitHub",
  }));
}

describe("project covers", () => {
  it.each([
    ["portfolio", "cover-portfolio"],
    ["steam", "cover-data"],
    ["velofacile", "cover-bike"],
    ["nomauclature", "cover-type"],
  ])("keeps the artwork for %s when the position changes", (id, artwork) => {
    const first = renderCard(id, 1);
    const fifth = renderCard(id, 5);

    for (const html of [first, fifth]) {
      expect(html).toContain(`class="project-cover project-cover--${id}"`);
      expect(html).toContain(`class="${artwork}"`);
    }
    expect(first).toContain('class="cover-index">01<');
    expect(fifth).toContain('class="cover-index">05<');
  });

  it("uses the neutral cover for a project without custom artwork", () => {
    expect(renderCard("new-project", 1)).toContain('class="project-cover project-cover--default"');
  });
});
