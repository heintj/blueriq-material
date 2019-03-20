import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {
  SecurityActions,
  SecurityViolationAction,
  SessionAction,
  SessionEventActions,
  SessionRegistry,
  StartupActions,
} from '@blueriq/angular';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MessagesEffect {

  @Effect({ dispatch: false })
  sessionActions$: Observable<any> = this.actions$.pipe(
    ofType<SessionAction>(StartupActions.SESSION_LOADED, SessionEventActions.CHANGED_PAGE, SessionEventActions.PAGE_UPDATED),
    tap(action => this.showSnackBar(action)),
  );

  @Effect({ dispatch: false })
  securityViolations$: Observable<any> = this.actions$.pipe(
    ofType<SecurityViolationAction>(SecurityActions.SECURITY_VIOLATION),
    tap(action => this.showSecurityMessages(action.violations.messages)),
  );

  constructor(private actions$: Actions,
              private snackBar: MatSnackBar,
              private sessionRegistry: SessionRegistry) {
  }

  private showSnackBar(action: SessionAction): void {
    const session = this.sessionRegistry.getByNameOptionally(action.sessionName);
    if (session) {
      const messages = session.pageModel.page.messages;
      if (messages.hasMessages) {
        // concatenate all messages, as only one snackbar can be shown at a time
        const messagesAsText = messages.all.map(message => message.text).join(', ');
        this.snackBar.open(messagesAsText, 'Ok', {
          panelClass: messages.hasErrors ? 'snackbar-error' : 'snackbar-warning',
        });
      }
    }
  }

  private showSecurityMessages(messages: string[]): void {
    if (messages.length > 0) {
      const messagesAsText = messages.join(', ');
      this.snackBar.open(messagesAsText, 'Ok', {
        panelClass: 'snackbar-error',
      });
    }
  }
}
