module Task {
    export class TaskViewModel{
        public TaskEntered: KnockoutObservable<string> = ko.observable('');

        public checkTask() {
            console.log(this.TaskEntered());
        }
    }
}