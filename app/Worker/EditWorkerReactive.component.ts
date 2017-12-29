import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../Services/WorkerService.service';
import { IWorker, Worker } from '../Models/worker.model';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from  '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'edit-worker-reactive',
    templateUrl: 'app/Worker/EditWorkerReactive.component.html',
})

export class EditWorkerReactive implements OnInit 
{
    editWorkerReactiveForm: FormGroup;
    worker : Worker = new Worker();
    workerId: number;

    emailMessage: string;
    showAddress: Boolean = false;
    private validationMessages = 
    {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address'
    }
    constructor (private fb : FormBuilder, private route: ActivatedRoute)
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
            //chkboxAddAddress: [''],
            /*email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+')]],*/
            //addressesGroup: this.buildAddress(),
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
