export interface ITodo {
	id: number;
	createdBy: number;
	title: string;
	completed: boolean;
	description: string;
	createdAt: Date;
}

export interface ITodoCreate {
	id?: number;
	title: string;
	description?: string;
	completed?: boolean;
	createdBy: number;
}
