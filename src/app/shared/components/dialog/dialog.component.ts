import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { DialogData } from '../../../models/dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, NgTemplateOutlet],
})
export class DialogComponent {
  @Input() modalBody!: TemplateRef<any>;
  @Input() myContext!: any;
  
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public dialog: DialogData,
  ) { }
}
