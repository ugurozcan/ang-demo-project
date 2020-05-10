import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationModel } from '../models/notification'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }

  showSuccess(notification: NotificationModel) {
    this.toastr.success(notification.message, notification.title);
  }

  showError(notification: NotificationModel) {
    this.toastr.error(notification.message, notification.title);
  }
  
}
