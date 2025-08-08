import { ExternalLink, Star, GitBranch, Github, Loader2 } from "lucide-react";
import { useGitHubRepos } from "@/hooks/use-github-repos";
import { Button } from "./button";

export default function ProjectsSection() {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
          <p className="text-slate-400 mb-6">GitHub에서 가져온 최신 프로젝트들입니다</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="flex items-center space-x-3 text-slate-400">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="text-lg">Loading GitHub repositories...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="col-span-full text-center py-20">
              <div className="text-red-400 mb-4">
                Failed to load GitHub repositories: {error}
              </div>
              <p className="text-slate-400">
                Please check if the GitHub API token is configured correctly.
              </p>
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="col-span-full text-center py-20">
              <div className="text-slate-400">
                No repositories found.
              </div>
            </div>
          )}

          {repos.map((repo) => (
            <div key={repo.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors border border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                <div className="flex items-center space-x-3 text-slate-400">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {repo.stars || 0}
                  </span>
                  <span className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    {repo.forks || 0}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {repo.description || "No description available."}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {repo.language && (
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                      {repo.language}
                    </span>
                  )}
                  {repo.updated_at && (
                    <span className="text-slate-400 text-xs">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 font-medium transition-colors"
          >
            <a
              href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME || 'hcho0511'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
