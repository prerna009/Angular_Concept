import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  @Output() selectedNote=new EventEmitter<Note>();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNoteObservable().subscribe((note: Note[]) => {
      this.notes = note;
    });
  }

  editNote(note:Note):void{
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
  }

  deleteNote(id:number):void{
    this.noteService.deleteNote(id);
    localStorage.removeItem('API_URL');
  }
}
