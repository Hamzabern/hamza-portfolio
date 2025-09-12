import { apiGet } from "./api";

export const getSite    = () => apiGet('/site');
export const getProjects = () => apiGet('/projects');
export const getProject  = (slug) => apiGet(`/projects/${slug}`);
