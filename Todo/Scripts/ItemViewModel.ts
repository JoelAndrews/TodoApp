module Task{
    export class ItemViewModel{
        public Description: KnockoutObservable<string> = ko.observable('');
        public DueDate: KnockoutObservable<Date> = ko.observable(null);

        constructor(desc: string, dueDate: Date) {
            this.Description(desc);
            this.DueDate(dueDate);
        }
    }
}