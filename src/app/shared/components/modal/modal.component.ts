import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { DialogData } from '../../../models/dialogData';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, NgTemplateOutlet],
})
export class ModalComponent {
  @Input() modalBody!: TemplateRef<any>;
  @Input() myContext!: any;

  constructor(
    public dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public dialog: DialogData,
  ) { }
}
