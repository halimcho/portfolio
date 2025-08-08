import { useQuery } from "@tanstack/react-query";
import type { GitHubRepo } from "@shared/schema";

export function useGitHubRepos() {
  const { data: repos = [], isLoading, error } = useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos"],
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    repos,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
}
