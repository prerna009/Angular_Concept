import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent implements OnInit, OnChanges {
  noteForm!: FormGroup;
  isEdit!: boolean;
  @Input() selectedNote!: Note;

  constructor(private noteService: NoteService, private fb: FormBuilder) {
    this.noteService.getEditable().subscribe({
      next: (response) => { this.isEdit = response },

    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedNote']?.currentValue) {
      const value = changes['selectedNote']?.currentValue;
      this.noteForm.patchValue({
        id: value.id,
        title: value.title,
        content: value.content
      });
    }
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      id: new Date().getTime(),
      title: ['', Validators.required],
      content: [''],
    });
  }

  onSubmit() {
    if (this.noteForm.invalid) {
      return;
    }
    const note: Note = this.noteForm.value;
    if (this.isEdit) {
      this.noteService.updateNote(note);
      this.noteService.setEditable(false);
    }
    else {
      this.noteService.createNote(note);
    }
    this.noteForm.reset();
  }
}
