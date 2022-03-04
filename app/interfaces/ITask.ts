export interface ITask {
	id: number;
	title: string;
	description?: string;
	currentAmount?: number;
	targetAmount: number;
	completed: boolean;
}
