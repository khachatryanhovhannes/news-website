import { resources } from "@/dump/resources";

export const getResources = async (page?: string) => {
  if (page) {
    return resources.filter((res) => res.page === page);
  }

  return resources;
};
