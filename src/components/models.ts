export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Student {
  fullName: string;
  merit: number;
  id: number;
  shortName: string;
  noPhoto?: boolean;
  nickNames?: string[];
  collegeName?: string;
  homeDistrict?: string;
  email?: string;
  phone?: string | string[];
  fb_profile?: string;
}
