import { registry } from '../registry';
import { SEND_SMS, GSM_MESSAGES } from './validation';

const MessagesSchema = registry.register('GsmMessages', GSM_MESSAGES);

export const SendSmsSchema = registry.register('SendSms', SEND_SMS);

void MessagesSchema;
