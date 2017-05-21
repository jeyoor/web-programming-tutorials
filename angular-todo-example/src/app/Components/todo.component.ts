import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../Service/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ITodo } from '../Model/todo';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Components/todo.component.html'
})

export class TodoComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    @ViewChild('addmodal') addModal: ModalComponent;
    todos: ITodo[];
    todo: ITodo;
    msg: string;
    indLoading: boolean = false;
    addTodoFrm: FormGroup;
    todoFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _todoService: TodoService) { }

    ngOnInit(): void {
        this.todoFrm = this.fb.group({
            key: [''],
            name: [''],
            isComplete: ['']
        });
        this.addTodoFrm = this.fb.group({
            name: [''],
            isComplete: ['']
        });
        this.LoadTodos();
    }

    LoadTodos(): void {
        this.indLoading = true;
        this._todoService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(todos => { this.todos = todos; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addTodo() {
        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Todo";
        this.modalBtnTitle = "Add";
        this.addTodoFrm.reset();
        this.addModal.open();
    }

    editTodo(key: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.SetKeyFieldState(false);
        this.modalTitle = "Edit Todo";
        this.modalBtnTitle = "Update";
        this.todo = this.todos.filter(x => x.key == key)[0];
        this.todoFrm.setValue(this.todo);
        this.modal.open();
    }

    deleteTodo(key: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.SetKeyFieldState(true);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.todo = this.todos.filter(x => x.key == key)[0];
        this.todoFrm.setValue(this.todo);
        this.modal.open();
    }

    onSubmit(formData: any) {
        this.msg = "";
   
        switch (this.dbops) {
            case DBOperation.create:
                this._todoService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
                    data => {
                        this.msg = "Data successfully added.";
                        this.LoadTodos();
                        this.addModal.dismiss();
                    },
                    error => {
                      this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._todoService.put(Global.BASE_USER_ENDPOINT, formData._value.key, formData._value).subscribe(
                    data => {
                        this.msg = "Data successfully updated.";
                        this.LoadTodos();
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._todoService.delete(Global.BASE_USER_ENDPOINT, formData._value.key).subscribe(
                    data => {
                        this.msg = "Data successfully deleted.";
                        this.LoadTodos();
                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

        }
    }

    SetControlsState(isEnable: boolean)
    {
        isEnable ? this.todoFrm.enable() : this.todoFrm.disable();
    }

    SetKeyFieldState(isEnable: boolean)
    {
        if (isEnable) {
            this.todoFrm.controls['key'].enable();
        }
        else {
            this.todoFrm.controls['key'].disable();
        }
    }
}