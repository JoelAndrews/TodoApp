module Task {
    export class TaskViewModel{
        public TaskEntered: KnockoutObservable<string> = ko.observable('');
        public DueDateEntered: KnockoutObservable<Date> = ko.observable(new Date());

        public Tasks: KnockoutObservableArray<ItemViewModel> = ko.observableArray([]);

        public AddTask() {
            this.Tasks.push(new ItemViewModel(this.TaskEntered(), this.DueDateEntered()));
            this.TaskEntered('');
            this.DueDateEntered(null);
        }
    }
}