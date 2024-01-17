export interface IThinkBase {
  idx?: string;
  uid?: string;
  topic_date?: string;
  content?: string;
  isShared?: boolean;
  createdAt?: Date;
}

export interface IThinkCreate {
  content: string;
  isShared: boolean;
}
