import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../Services/WorkerService.service';
//import { IWorker, Worker } from '../Models/worker.model';
//import { IWorker, Worker } from '../Services/worker.model';
import { IWorker, Worker } from '../Services/worker';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from  '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/observables/throw'; 

@Component({
    selector: 'edit-worker-reactive',
    templateUrl: 'app/Worker/EditWorkerReactive.component.html',
})

export class EditWorkerReactive implements OnInit 
{
    editWorkerReactiveForm: FormGroup;
    worker : Worker /*= new Worker()*/;
    workerId: number;

    emailMessage: string;
    showAddress: Boolean = false;
    private validationMessages = 
    {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address'
    }
    constructor (private fb : FormBuilder, private route: ActivatedRoute, private workerService : WorkerService)
    {
        
    }
    get addresses() : FormArray
    {
        return <FormArray>this.editWorkerReactiveForm.get('addressGroup');
    }


    ngOnInit(): void{

        this.workerId = this.route.snapshot.params.id;
        this.editWorkerReactiveForm = this.fb.group ({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]]
            }),
            addressGroup: this.fb.array([this.buildAddress()]),
            phone: '',
            notification: 'email',
            chkboxShowAddress: false
        })
        //This function is instead of the setNotification function that was attached to the HTML tag
        this.editWorkerReactiveForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
        const emailControl1 = this.editWorkerReactiveForm.get('emailGroup');
        const emailControl = this.editWorkerReactiveForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setMessage(emailControl));
        if (typeof this.workerId != 'undefined' &&  this.workerId > 0 )
        {
            this.workerService.getWorker(this.workerId).subscribe((result : Worker) => { this.setPageValues(result);}); 
        }
               
        
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
    }

    setPageValues(workerItem : Worker)
    {
        this.worker = workerItem;
        this.editWorkerReactiveForm.patchValue(
        {
            firstName: this.worker.FirstName,
            lastName: this.worker.LastName,
            /*emailGroup{ email: 
                this.worker.Email },*/
            zip: this.worker.Zip,
            street1: this.worker.Street1,
            street2: this.worker.Street2,
            phone: this.worker.PhoneNumber1
        });
    }
    buildAddress() : FormGroup
    {
        return this.fb.group({
                    zip: '', 
                    street1: '',
                    street2: '',
                    city: '',
                    state: '',        
                })
    }
    save()
    {
        console.log(this.editWorkerReactiveForm);
        console.log('Saved:' + JSON.stringify(this.editWorkerReactiveForm.value));
    }

    setMessage(control : AbstractControl) :void 
    {
        this.emailMessage = '';
        if ((control.touched || control.dirty) && control.errors)
        {
            this.emailMessage = Object.keys(control.errors).map(key => this.validationMessages[key]).join(' ');
        }
    }
    populateTestData()
    {
        this.editWorkerReactiveForm.patchValue({
            firstName: 'Guy',
            lastName: 'Epstein',
            email:'eefsds@da.com',
            street1:'Duchift1',
            street2: 'Hacharuv2'
            
            
        });
    }
    setNotification(notifyVia :string): void{
        const phoneControl = this.editWorkerReactiveForm.get('phone');
        if (notifyVia === 'text')
        {
            phoneControl.setValidators(Validators.required);
        }
        else{
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
    
    setAddAddressState(input :HTMLInputElement) :void{
        const addAddressCheckBox = this.editWorkerReactiveForm.get('chkboxAddAddress');
        this.showAddress = input.checked;
    }
}
