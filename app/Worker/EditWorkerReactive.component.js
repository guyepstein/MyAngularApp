"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var worker_model_1 = require("../Models/worker.model");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
var EditWorkerReactive = (function () {
    function EditWorkerReactive(fb, route) {
        this.fb = fb;
        this.route = route;
        this.worker = new worker_model_1.Worker();
        this.showAddress = false;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address'
        };
    }
    Object.defineProperty(EditWorkerReactive.prototype, "addresses", {
        get: function () {
            return this.editWorkerReactiveForm.get('addressGroup');
        },
        enumerable: true,
        configurable: true
    });
    EditWorkerReactive.prototype.ngOnInit = function () {
        var _this = this;
        this.workerId = this.route.snapshot.params.id;
        this.editWorkerReactiveForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]]
            }),
            //chkboxAddAddress: [''],
            /*email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+')]],*/
            //addressesGroup: this.buildAddress(),
            addressGroup: this.fb.array([this.buildAddress()]),
            phone: '',
            notification: 'email',
            chkboxShowAddress: false
        });
        //This function is instead of the setNotification function that was attached to the HTML tag
        this.editWorkerReactiveForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailControl1 = this.editWorkerReactiveForm.get('emailGroup');
        var emailControl = this.editWorkerReactiveForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) { return _this.setMessage(emailControl); });
        /*new FormGroup(
            {
                firstName: new FormControl(),
                lastName: new FormControl(),
                email: new FormControl(),
                zip: new FormControl(),
                street1: new FormControl(),
                street2: new FormControl(),
                city: new FormControl(),
             }
        );*/
    };
    EditWorkerReactive.prototype.buildAddress = function () {
        return this.fb.group({
            zip: '',
            street1: '',
            street2: '',
            city: '',
            state: '',
        });
    };
    EditWorkerReactive.prototype.save = function () {
        console.log(this.editWorkerReactiveForm);
        console.log('Saved:' + JSON.stringify(this.editWorkerReactiveForm.value));
    };
    EditWorkerReactive.prototype.setMessage = function (control) {
        var _this = this;
        this.emailMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.emailMessage = Object.keys(control.errors).map(function (key) { return _this.validationMessages[key]; }).join(' ');
        }
    };
    EditWorkerReactive.prototype.populateTestData = function () {
        this.editWorkerReactiveForm.patchValue({
            firstName: 'Guy',
            lastName: 'Epstein',
            email: 'eefsds@da.com',
            street1: 'Duchift1',
            street2: 'Hacharuv2'
        });
    };
    EditWorkerReactive.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.editWorkerReactiveForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    EditWorkerReactive.prototype.setAddAddressState = function (input) {
        var addAddressCheckBox = this.editWorkerReactiveForm.get('chkboxAddAddress');
        this.showAddress = input.checked;
    };
    return EditWorkerReactive;
}());
EditWorkerReactive = __decorate([
    core_1.Component({
        selector: 'edit-worker-reactive',
        templateUrl: 'app/Worker/EditWorkerReactive.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute])
], EditWorkerReactive);
exports.EditWorkerReactive = EditWorkerReactive;
//# sourceMappingURL=EditWorkerReactive.component.js.map