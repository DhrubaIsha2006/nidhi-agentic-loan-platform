import { useEffect, useState } from "react";
import { fetchAdminApplications } from "@/lib/api";

export interface AdminApplication {
  application_id: string;
  name: string;
  amount: number;
  reason: string;
  status: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  assigned_to: string | null;
  submitted_at: string;
}

export function useAdminApplications() {
  const [applications, setApplications] = useState<AdminApplication[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await fetchAdminApplications();
    setApplications(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return {
    applications,
    loading,
    reload: load,
  };
}
