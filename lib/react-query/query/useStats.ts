import { useQuery } from "@tanstack/react-query";
import { IDashboardStatistics } from "@/types";
import { fetchDashboardStats } from "@/lib/api/stats.api";


export const useDashboardStats = () => {
  return useQuery<IDashboardStatistics | null, Error>({
    queryKey: ["dashboard-stats"],

    queryFn: async () => {
      const response = await fetchDashboardStats();
      return response;
    },
  });
};
