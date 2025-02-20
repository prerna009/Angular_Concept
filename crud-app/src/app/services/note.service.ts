import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private _apiKey: string = environment.API_KEY;
  private notes: Note[] = [];
  private noteSubject = new BehaviorSubject<Note[]>([]);
  private isEdit = new BehaviorSubject<boolean>(false);

  constructor() { }

  getEditable() {
    return this.isEdit.asObservable();
  }

  setEditable(value: boolean) {
    this.isEdit.next(value);
  }

  getNoteObservable(): Observable<Note[]> {
    return this.noteSubject.asObservable();
  }

  createNote(note: Note): void {
    note.id = new Date().getTime();
    this.notes.push(note);
    this.noteSubject.next(this.notes);
    localStorage.setItem('API_KEY', this._apiKey);
  }

  updateNote(updatedNote: Note): void {
    const index=this.notes.findIndex((note)=>note.id===updatedNote.id);
    if(index!=-1){
      this.notes[index]=updatedNote;
      this.noteSubject.next(this.notes);
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.noteSubject.next(this.notes);
  }

  getApiUrl(): string | null {
    return localStorage.getItem('API_KEY');
  }
}
