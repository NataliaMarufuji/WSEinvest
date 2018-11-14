import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'primeiros-passos', 
    templateUrl: './passos.component.html',
    styleUrls: ['./passos.component.css']
})
export class PassosComponent { 

    constructor(){
        $.getScript('app/Scripts/collapsible.min.js');
    }

}